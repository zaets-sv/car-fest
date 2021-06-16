import { Injectable } from '@angular/core';
import { UserApi } from '../../spa/users/user-api';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { User } from '../../spa/services/user.interface';
@Injectable()
export class UserService implements UserApi {
  isAuthenticated = false;
  private url = 'http://localhost:3000/users';
  constructor(public router: Router, public http: Http) {

  }
  signIn(email: string, password: string): Observable<any> {
    return this.http.get(this.url).pipe(delay(2000), map((response: Response) => {
      const arrayFilter: User[] = response.json().filter((item: User) =>
        item.email === email && item.password === password);
      if (arrayFilter.length !== 0) {
        this.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify(arrayFilter[0]));
      } else {
        throw new Error('Invalid email or password');
      }
    }));
  }

  signOut(): Observable<any> {
    this.isAuthenticated = false;
    localStorage.clear();
    this.router.navigate(['/sign-in']);
    return of({});
  }
  registerUser(registerForm: User) {
    return this.http.post(this.url, {
      name: registerForm.name, email: registerForm.email,
      password: registerForm.password
    });
  }
}
