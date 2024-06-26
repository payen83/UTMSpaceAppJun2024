import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _storage: Storage;
  private loginSubject = new Subject();
  constructor(private storage: Storage) { 
    this.init();
  }

  publishLoginEvent(data: any){
    this.loginSubject.next(data);
  }

  observeLoginEvent(): Subject<any>{
    return this.loginSubject;
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async saveData(key: any, value: any){
    await this._storage.set(key, value);
  }

  async getData(key: string){
    const data = await this._storage.get(key);
    console.log(data);
    return await data;
  }

}
