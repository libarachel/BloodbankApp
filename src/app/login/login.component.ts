import { Component, OnInit } from '@angular/core';
import { BloodbankService } from '../bloodbank.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserDetails = {email:'', password:''};
  constructor(private _bloodbank: BloodbankService, private _router: Router) { }
loginUser(){
  this._bloodbank.loginUser(this.loginUserDetails)
    .subscribe(
      res =>{
        localStorage.setItem('token' , res["token"])
        this._router.navigate(['/']);
      },
      err => console.log(err)
    )
}
  ngOnInit(): void {
  }

}
