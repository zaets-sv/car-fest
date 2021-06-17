import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './user.service';
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(public router: Router, public userService: UserService, private cookieService: CookieService) {
    const cookieExists: boolean = this.cookieService.check('authenticated');

   /* if (cookieExists) {
      console.log('cookieExists =-> ' + cookieExists);
      this.router.navigate(['/authenticated']);
     
    }*/
  }

  canActivate(): boolean {
    if (!this.userService.isAuthenticated) {
      this.router.navigate(['/sign-in']);
    }
    return this.userService.isAuthenticated;
  }
  canActivateChild(): boolean {
    return this.canActivate();
  }
}
