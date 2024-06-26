import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  public newsForm: any = FormGroup;
  constructor(
    private api: APIService,
    private formBuilder: FormBuilder,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.getFormBuilder();
  }

  getFormBuilder(){
    this.newsForm = this.formBuilder.group({
      title: [''],
      description: [''],
      location: [''],
      date: [null],
      image_url: ['']
    })
  }

  async addNews(){
    let payload: any = this.newsForm.value;
    console.log(payload);

    try{
      const response: any = await this.api.doPost('/news', payload);
      console.log('response ==> ', response);
      alert('Add News Successful');
      this.navCtrl.back();
    } catch(error: any){
      console.log('Error ==> ', error.message)
    }

  }


}
