import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: any = { email: 'test1@email.com', password: 'test1234' };
  public imagePath: any = null;

  constructor(
    private api: APIService, 
    private router: Router,
    private data: DataService
  ) { }

  async takePhoto(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.imagePath = image.webPath;
  }

  ngOnInit() {
  }

  async btnLogin(){
    try {
      let response: any = await this.api.doPost('/login', this.user);
      console.log('login response', response);
      if(response.token){
        this.data.publishLoginEvent(false);
        this.data.saveData('TOKEN', response.token);
        
        //redirect to Home Page
        this.router.navigateByUrl('/home', { replaceUrl: true });
      }
    } catch(error: any){
      console.log('Error ==> ', error.message);
    }
  }

}
