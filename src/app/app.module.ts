import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DemoComponent } from './demo/demo.component';
import {routing} from "./app.routing";

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';
import { WelcomeComponent } from './welcome/welcome.component';
import { GlobalService } from './global.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent, DemoComponent, WelcomeComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, SocialLoginModule,routing],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '173245694890-3mnknn5iasualc6rjhu1oo534es4d9vt.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('311368696691160'),
          },
             ],
      } as SocialAuthServiceConfig,
    },GlobalService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
