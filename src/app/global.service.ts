import { Injectable } from '@angular/core';
import { GlobalData } from './globalData';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public data:SocialUser[] = [];
 
    setData(data: SocialUser) {
        this.data.push(data);
    }
 
    getData(): SocialUser[] {
        return this.data;
    }
}
