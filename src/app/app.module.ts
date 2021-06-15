import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpaModule } from '../spa/spa.module';
import { AppHomeComponent } from './routes/app-home/app-home.component';
import { SettingsComponent } from './routes/settings/settings.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/app.routes';
import { CarDetailComponent } from './routes/car-detail/car-detail.component';
import { CarListComponent } from './routes/car-list/car-list.component';
import { CarMaintComponent } from './routes/car-maint/car-maint.component';
import { AuthenticatedComponent } from './routes/authenticated/authenticated.component';
import { UserService } from './services/user.service';
import { UserApi } from '../spa/users/user-api';
import { AuthGuard } from './services/auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    SettingsComponent,
    CarDetailComponent,
    CarListComponent,
    CarMaintComponent,
    AuthenticatedComponent
  ],
  imports: [
    BrowserModule, SpaModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,
    {
      provide: UserApi, useExisting: UserService
    },
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
