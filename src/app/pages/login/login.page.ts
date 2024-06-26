import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: any = { email: 'test1@email.com', password: 'test1234' };
  constructor(
    private api: APIService, 
    private router: Router,
    private data: DataService
  ) { }

  ngOnInit() {
  }

  async btnLogin(){
    try {
      let response: any = await this.api.doPost('/login', this.user);
      console.log('login response', response);
      if(response.token){
        //redirect to Home Page
        this.data.saveData('TOKEN', response.token);
        this.router.navigateByUrl('/home', { replaceUrl: true });
      }
    } catch(error: any){
      console.log('Error ==> ', error.message);
    }
  }

}
