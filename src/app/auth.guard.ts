import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BloodbankService } from './bloodbank.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _bloodbank: BloodbankService , private _router: Router )
  {

  }
  canActivate(): boolean {
    if (this._bloodbank.loggedIn())
    {
    console.log('true');
    return true;
    }
    else{

      this._router.navigate(['/login']);
      return false;
    }
      }
}
