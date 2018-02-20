import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MenuPage} from '../pages/menu/menu';
import {ListPage} from '../pages/list/list';
import {ContentPage} from '../pages/content/content';

import {OfficePage} from '../pages/office/office';
import {TechPage} from '../pages/tech/tech';
import {HealthPage} from '../pages/health/health';









@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    ListPage,
    ContentPage,
    OfficePage,
    TechPage,
    HealthPage
    
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
    ListPage,
    ContentPage,
    OfficePage,
    TechPage,
    HealthPage
    
   




  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
