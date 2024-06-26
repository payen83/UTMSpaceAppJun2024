import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public isLogin: boolean = true;
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'News', url: '/news', icon: 'newspaper' },
    { title: 'Camera', url: '/camera', icon: 'camera' }

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private data: DataService, private router: Router) {
  }

  ngOnInit(): void {
      this.init();
  }

  async init(){
    await this.data.init();
    this.data.observeLoginEvent().subscribe((data: any) => {
      this.isLogin = data;
    })

    const token: any = await this.data.getData('TOKEN');
    console.log(token)
    if(token){
      this.data.publishLoginEvent(false);
      this.router.navigateByUrl('/home', { replaceUrl: true });
    }
  }

}
