import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: SocialUser;

  constructor(private authService: SocialAuthService,private router: Router,private globalService:GlobalService) {
   
   }

  ngOnInit(): void {

    this.user=this.globalService.getData()[0];
    this.globalService.data=[];
  }
  async signOut() {
    await this.authService.signOut();
    this.router.navigate(['']);

  }

}
