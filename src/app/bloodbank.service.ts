import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders   } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BloodbankService {

  baseUri:string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
 private _registerUrl = 'http://localhost:3000/api/register';
  
  private _loginUrl = 'http://localhost:3000/api/login';
  constructor(private http: HttpClient) { }
  getdonars(){
    return this.http.get('http://localhost:3000/api/donars');
  }
  newDonar(item)
  {
    let url = `${this.baseUri}/add-donar`;
    return this.http.post(url,{'donar': item})
    .subscribe((data) => {console.log(data) } )
  }

  showDonar(id:any){
    let url=`${this.baseUri}/edit/${id}`;
    return this.http.get(url);
    // .subscribe((data)=>{console.log(data)})
  }
  editDonar(id:any,item){
    let url=`${this.baseUri}/update/${id}`;
    return this.http.post(url, item);
    // .subscribe((data)=>{console.log(data)})
  }

  deleteDonar(id: any) {
    let url= `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers });
  }
  getrecipients(){
    return this.http.get('http://localhost:3000/api/recipients');
  }
  newRecipient(item)
  {
    let url = `${this.baseUri}/add-recipient`;
    return this.http.post(url,{'recipient': item})
    .subscribe((data) => {console.log(data) } )
  }
  
  showRecipient(id:any){
    let url=`${this.baseUri}/editing/${id}`;
    return this.http.get(url);
    // .subscribe((data)=>{console.log(data)})
  }
  editRecipient(id:any,item){
    let url=`${this.baseUri}/updating/${id}`;
    return this.http.post(url, item);
    // .subscribe((data)=>{console.log(data)})
  }

  deleteRecipient(id: any) {
    let url= `${this.baseUri}/deleting/${id}`;
    return this.http.delete(url, { headers: this.headers });
  }
  registerUser(user){
    return  this.http.post(this._registerUrl , user);
  }
  loginUser(user){
    return  this.http.post(this._loginUrl , user);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
