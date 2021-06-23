import { Component, OnInit } from '@angular/core';
import { UserApi } from '../user-api';
import { UserService } from '../../../app/services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { visibility } from '../../services/animations';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'spa-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  animations: [visibility]
})
export class SignInComponent implements OnInit {
  submitting = false;
  formError!: string;
  cookieValue!: string;

  constructor(private userApi: UserApi, private userService: UserService, private router: Router, private cookieService: CookieService) { }
  onSubmit(signInForm: NgForm): void {

    this.cookieService.delete(signInForm.value.email);

    if (signInForm.valid) {
      this.submitting = true;
      this.formError = '';
      this.userApi.signIn(signInForm.value.email, signInForm.value.password, signInForm.value.adminRole ).subscribe((data) => {

        console.log("data -> " + data);
        let parseValueAdminRole : any = localStorage.getItem('user');
        let adminRole = JSON.parse(parseValueAdminRole).adminRole;

        console.log('adminRole: ', adminRole)
        if (adminRole === true) {
          this.router.navigate(['/authenticated/car-list/5']);
        } else {
          this.router.navigate(['/authenticated']);
        }
        this.cookieService.set('authenticated', signInForm.value.email);
      },
        (error) => {
          this.submitting = false;
          this.formError = error;
        });
    }
  }
  ngOnInit(): void {
    
  }
}
