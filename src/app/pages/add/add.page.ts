import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private formBuilder: FormBuilder
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

  addNews(){

  }


}
