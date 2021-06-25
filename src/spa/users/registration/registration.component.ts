import { Component, OnInit } from '@angular/core';
import { visibility } from '../../services/animations';
import { UserService } from '../../../app/services/user.service';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';
import { UserApi } from '../user-api';
import { delay, map, catchError } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { User } from '../../services/user.interface';

@Component({
  selector: 'spa-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  animations: [visibility]
})
export class RegistrationComponent implements OnInit {
  registering = false;
  hasAdded = false;
  formError!: false;
  nameError!: string;
  isChecked!: false;

  constructor(private router: Router, private userApi: UserApi, private userService: UserService, public http: Http) {
    if (this.isChecked === undefined) {
      this.isChecked = false;
    }
  }
  onSubmit(registerForm: NgForm) {
    this.nameError = '';

    this.userApi.getRegisteredUsers(registerForm.value.name).subscribe(() => {

      if (this.userService.validName === true) {
        this.registering = true;
        this.userApi.registerUser(registerForm.value).subscribe(() => {
          setTimeout(() => { this.hasAdded = true; }, 1200);
          setTimeout(() => { this.router.navigate(['/sign-in']); }, 2000);
        });
      } else {
        this.nameError = this.userService.nameError;
      }
    });
  }

  ngOnInit() {
  }

}
