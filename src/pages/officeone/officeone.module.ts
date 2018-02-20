import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficeonePage } from './officeone';

@NgModule({
  declarations: [
    OfficeonePage,
  ],
  imports: [
    IonicPageModule.forChild(OfficeonePage),
  ],
})
export class OfficeonePageModule {}
