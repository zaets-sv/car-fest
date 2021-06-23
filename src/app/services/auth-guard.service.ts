import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(public router: Router, public userService: UserService) {
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
