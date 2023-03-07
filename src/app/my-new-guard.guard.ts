import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './user/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class MyNewGuardGuard implements CanActivate {
  constructor(private user:UserAuthService,private route:Router){}
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = state.url;
      console.log('Url:'+ url)
      if (this.user.isUserLoggedIn()) {
        return true; 
      }
            this.user.setRedirectUrl(url);
            this.route.navigate([ this.user.getLoginUrl() ]);
      return false;
    }
  }

