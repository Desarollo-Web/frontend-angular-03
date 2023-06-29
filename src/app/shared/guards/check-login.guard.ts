import { Observable, map, take } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn:'root'
  })
export class CheckLoginGuard implements CanActivate {

  constructor(private auth: AuthService) {}

  canActivate(): Observable<boolean>{
    return this.auth.getToken$().pipe(
      take(1),
      map(token=>(token==""?true:false))
    )
  }
}
