import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MenuPage} from '../pages/menu/menu';



import {OfficePage} from '../pages/office/office';
import {TechPage} from '../pages/tech/tech';
import {HealthPage} from '../pages/health/health';

import {OfficeonePage} from '../pages/officeone/officeone';
import {OfficetwoPage} from '../pages/officetwo/officetwo';
import {OfficethreePage} from '../pages/officethree/officethree';

import {TechonePage} from '../pages/techone/techone';
import {TechtwoPage} from '../pages/techtwo/techtwo';
import {TechthreePage} from '../pages/techthree/techthree';

import {CareonePage} from '../pages/careone/careone';
import {CaretwoPage} from '../pages/caretwo/caretwo';
import {CarethreePage} from '../pages/carethree/carethree';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    
    
    OfficePage,
    TechPage,
    HealthPage,
    OfficeonePage,
    OfficetwoPage,
    OfficethreePage,
    TechonePage,
    TechtwoPage,
    TechthreePage,
    CareonePage,
    CaretwoPage,
    CarethreePage

    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    
  
    OfficePage,
    TechPage,
    HealthPage,
    OfficeonePage,
    OfficetwoPage,
    OfficethreePage,
    TechonePage,
    TechtwoPage,
    TechthreePage,
    CareonePage,
    CaretwoPage,
    CarethreePage
    
  


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
