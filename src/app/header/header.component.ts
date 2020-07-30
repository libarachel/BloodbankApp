import { Component, OnInit } from '@angular/core';
import {BloodbankService } from '../bloodbank.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _bloodbank: BloodbankService, private _router: Router) { }
logoutUser()
{
  localStorage.removeItem('token');
  this._router.navigate(['/home']);
}
  ngOnInit(): void {
  }

}
