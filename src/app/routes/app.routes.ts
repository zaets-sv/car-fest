import { Routes, CanActivate } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { SettingsComponent } from './settings/settings.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarMaintComponent } from './car-maint/car-maint.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { SignInComponent } from '../../spa/users/sign-in/sign-in.component';
import { RegistrationComponent } from '../../spa/users/registration/registration.component';
import { AuthGuard } from '../services/auth-guard.service';
import { MyCarsComponent } from './my-cars/my-cars.component';

export const appRoutes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegistrationComponent },
  {
    path: 'authenticated', component: AuthenticatedComponent, canActivate: [AuthGuard], children: [
      {
        path: '', canActivateChild: [AuthGuard], children: [
          { path: 'home', component: AppHomeComponent },
          { path: 'my-cars', component: MyCarsComponent },
          { path: 'settings', component: SettingsComponent },
          { path: 'car-list/:count', component: CarListComponent },
          { path: 'car-detail/:id/:operation', component: CarDetailComponent },
          { path: 'car-maint', component: CarMaintComponent }
        ]
      },
/*      {
        path: 'admin',
        component: CarDetailComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: 'admin'
        }
      },*/
    ]
  },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: '**', component: SignInComponent }
];
