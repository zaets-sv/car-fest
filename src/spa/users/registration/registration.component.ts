import { Component, OnInit } from '@angular/core';
import { visibility } from '../../services/animations';
import { UserService } from '../../../app/services/user.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { UserApi } from '../user-api';
@Component({
  selector: 'spa-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  animations: [visibility]
})
export class RegistrationComponent implements OnInit {
  registering = false;
  hasAdded = false;
  formError = false;

  constructor(private router: Router, private userApi: UserApi) { }
  onSubmit(registerForm: NgForm) {
    this.registering = true;
    this.userApi.registerUser(registerForm.value).subscribe(() => {
      setTimeout(() => {this.hasAdded = true; }, 1200);
      setTimeout(() => {this.router.navigate(['/sign-in']); }, 2000);
    });
  }
  ngOnInit() {
  }

}
