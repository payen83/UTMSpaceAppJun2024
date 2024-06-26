import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Swiper } from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public swiper!: Swiper;
  public showNews: boolean = false;
  constructor(
    private data: DataService,
    private router: Router
  ) { }

  showHideNews(){
    this.showNews = !this.showNews;
  }

  async doLogout(){
    await this.data.removeData('TOKEN');
    this.data.publishLoginEvent(true);
    this.router.navigateByUrl('/login', {replaceUrl: true});
  }

  ngOnInit() {
  }

}
