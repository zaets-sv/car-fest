import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpaModule } from '../spa/spa.module';
import { AppHomeComponent } from './routes/app-home/app-home.component';
import { CarsComponent } from './routes/cars/cars.component';
import { SettingsComponent } from './routes/settings/settings.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    CarsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule, SpaModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
