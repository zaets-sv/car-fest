import { Observable } from 'rxjs';
import { User } from '../services/user.interface';

export abstract class UserApi {
  signIn!: (email: string, password: string) => Observable<any>;
  signOut!: () => Observable<any>;
  registerUser!: (formData: any) => any;
  getRegisteredUsers!: (name: string) => Observable<any>;
  addCar!: (myNewCar: any, nameCar: string) => any;
}
