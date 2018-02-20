import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';

import {OfficePage} from '../office/office';
import {TechPage} from '../tech/tech';
import {HealthPage} from '../health/health';



@NgModule({
  declarations: [
    MenuPage,
    OfficePage,
    TechPage,
    HealthPage

  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
    IonicPageModule.forChild(OfficePage),
    IonicPageModule.forChild(TechPage),
    IonicPageModule.forChild(HealthPage),




  ],
})
export class MenuPageModule {}

export class OfficePageModule {}

export class TechPageModule {}

export class HealthPageModule {}
