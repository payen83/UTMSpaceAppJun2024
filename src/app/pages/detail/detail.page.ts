import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public id: any;
  public news: any = {
    title: '',
    description: '',
    date: '',
    location: '',
    image_url: null
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: APIService
  ) { }
  
  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id ==> ', this.id);

    try {
      const response: any = await this.api.doGet('/news/' + this.id);
      this.news = response;
      console.log(this.news);
    } catch(error: any){
      //handle error here
    }
    
  }

}
