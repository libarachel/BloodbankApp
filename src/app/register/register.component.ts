import { Component, OnInit } from '@angular/core';
import { BloodbankService } from '../bloodbank.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registeredUser = {email: '', password: ''};

  constructor(private _bloodbank: BloodbankService , private _router: Router) { }
  registerUser(){
    // this._product.registerUser(this.registeredUser)
    // .subscribe(
    //   res => {
    //     localStorage.setItem('token' , res["token"])
    //     this._router.navigate(['/']);
    //   },
    //   err => console.log(err)
    // )

    this._bloodbank.registerUser(this.registeredUser)
    .subscribe(
      res => {
        localStorage.setItem('token' , res["token"])
        this._router.navigate(['/']);
      },
      err => console.log(err)
    )
  }
  ngOnInit(): void {
  }

}
