import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string="http://localhost:3000/user_routes/";
  constructor(private _http:HttpClient) { }

  login(user){
    let body=JSON.stringify(user);
    let _headers=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+"login",body,{headers:_headers});
  }

  signup(user){
    let body=JSON.stringify(user);
    let _headers=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+"signup",body,{headers:_headers});
  }

  addDetails(user){
    let body=JSON.stringify(user);
    let _headers=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+"addDetails",body,{headers:_headers});
  }

  getUserById(){
    return this._http.get(this.url+localStorage.getItem("email_id"));
  }

  getAllUser(){
    return this._http.get(this.url);
  }
}
