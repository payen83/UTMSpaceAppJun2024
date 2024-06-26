import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _storage: Storage;
  constructor(private storage: Storage) { 
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async saveData(key: any, value: any){
    await this._storage.set(key, value);
  }

  async getData(key: string){
    return await this._storage.get(key);
  }
}
