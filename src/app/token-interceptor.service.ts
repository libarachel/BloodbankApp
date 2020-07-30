import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { BloodbankService } from './bloodbank.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }
  intercept(req,next)
  {
    let bloodbankService = this.injector.get(BloodbankService);
    let tokenizedReq = req.clone(
      {
      setHeader: {
        Authorization: `Bearer ${bloodbankService.getToken()}`
      }
    }
    )
    return next.handle(tokenizedReq)
  }
}
