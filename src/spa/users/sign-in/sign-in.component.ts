import { Component, OnInit } from '@angular/core';
import { UserApi } from '../user-api';
import { UserService } from '../../../app/services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { visibility } from '../../services/animations';

@Component({
  selector: 'spa-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  animations: [visibility]
})
export class SignInComponent implements OnInit {
  submitting = false;
  formError!: string;
  constructor(private userApi: UserApi, private userService: UserService, private router: Router) { }
  onSubmit(signInForm: NgForm): void {
    if (signInForm.valid) {
      this.submitting = true;
      this.formError = '';
      this.userApi.signIn(signInForm.value.email, signInForm.value.password).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/authenticated']);
      },
        (error) => {
          this.submitting = false;
          this.formError = error;
        });
    }
  }
  ngOnInit() {
  }
}
