import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ngModel issue will come if not imported
import { HttpClientModule } from "@angular/common/http";
import { SharedService } from './shared.service';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ManufacturersComponent } from '../pages/manufacturers/manufacturers.component';
import { VehiclesComponent } from '../pages/vehicles/vehicles.component';
import { ReportsComponent } from '../pages/reports/reports.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ManufacturersComponent,
    VehiclesComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ManufacturersComponent,
    VehiclesComponent,
    ReportsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SharedService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
