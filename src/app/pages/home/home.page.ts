import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
  }

}
