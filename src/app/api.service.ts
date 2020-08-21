import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  postId:number;
  constructor(private http:HttpClient) { }

  saveUser(user:SocialUser)
  {
    let token =null;
     token = window.localStorage.getItem('token');
     this.checkToken(token);
     token = window.localStorage.getItem('token');
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token };
    
    const body = { id:user.id,username: user.firstName,emailId:user.email,loginProvider:user.provider };

  this.http.post<any>('http://localhost:8080/user/saveUser', body, {headers})
  .subscribe({
    next: data => {
           
      },
    error: error => {
    }
})
    
  }
  getToken()
  {   
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('test1:secret') };
    this.http.post<any>('http://localhost:8080/oauth/token?grant_type=client_credentials',null, {headers} ).subscribe(data => {
      if(data!=null) {
        window.localStorage.setItem('token', data.access_token);
      }
      else{
        alert('error while fetching token from oauth2 server');
      }
  })
  }

  checkToken(token:string)
  {
    const headers = { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('test1:secret') };
    this.http.post<any>('http://localhost:8080/oauth/check_token?token='+token,null, {headers} )
    .subscribe({
      next: data => {

      },
      error: error => {
        this.getToken();
      }
  })

  }
}
