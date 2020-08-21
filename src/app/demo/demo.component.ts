import { Component, OnInit } from '@angular/core';

import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import {ApiService} from "../api.service";

import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  user: SocialUser;
  postId:number;

  constructor(private authService: SocialAuthService,private apiService: ApiService,private router: Router,private globalService:GlobalService) 
  {   }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      if(this.user!=null)
      { 
         this.apiService.saveUser(this.user);
         this.globalService.setData(this.user);
         this.router.navigate(['home']);

      }
      
    });

    
  }

  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

  //     }
      async signInWithGoogle() {
        await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
       //this.saveData();
       
    
      }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);

  }

   signOut(): void {
    this.authService.signOut();
  }
  

}
