import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficePage } from './office';

import { OfficeonePage } from '../officeone/officeone';
import { OfficetwoPage } from '../officetwo//officetwo';
import { OfficethreePage } from '../officethree//officethree';


@NgModule({
  declarations: [
    OfficePage,
    OfficeonePage,
    OfficetwoPage,
    OfficethreePage,
    
  ],
  imports: [
    IonicPageModule.forChild(OfficePage),
    IonicPageModule.forChild(OfficeonePage),
    IonicPageModule.forChild(OfficetwoPage),
    IonicPageModule.forChild(OfficethreePage),
  ],
})
export class OfficePageModule {}

export class OfficeonePageModule {}

export class OfficetwoPageModule {}

export class OfficethreePageModule {}
