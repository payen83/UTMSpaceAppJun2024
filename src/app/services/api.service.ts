import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  public baseURL: string = 'http://localhost:8888/api';
  // for windows use 'http://localhost/api';
  constructor(
    private httpClient: HttpClient,
    private data: DataService
  ) { }

  doGet(endpoint: string){
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.baseURL + endpoint)
      .subscribe({
        next: (response: any) => { resolve(response); },
        error: (error: any) => { reject(error); }
      })
    })
  }//end of doGet

  async doPost(endpoint: string, payload: any){
    let token: any = await this.data.getData('TOKEN');
    console.log('token ==> ', token);
    let headers_: any = {};

    if(token){
      headers_ = { headers: new HttpHeaders(
        { Authorization: 'Bearer ' + token })
        .set('Content-Type', 'application/json')
      }
    }

    return new Promise((resolve, reject) => {
      this.httpClient.post(this.baseURL + endpoint, JSON.stringify(payload), headers_)
      .subscribe({
        next: (response: any) => { resolve(response); },
        error: (error: any) => { reject(error); }
      })
    })
  }

}
