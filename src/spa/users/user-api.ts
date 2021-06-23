import { Observable } from 'rxjs';

export abstract class UserApi {
  signIn!: (email: string, password: string, adminRole: boolean) => Observable<any>;
  signOut!: () => Observable<any>;
  registerUser!: (formData: any) => any;
}
