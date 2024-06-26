import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  public newsList: Array<any> = [];
  constructor(private api: APIService) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    try {
      const response: any = await this.api.doGet('/news');
      console.log(response);
      this.newsList = response;
    } catch(err) {
      console.log('Error => ',err);
    }
  }

}
