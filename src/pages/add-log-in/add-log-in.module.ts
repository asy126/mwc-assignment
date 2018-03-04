import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddLogInPage } from './add-log-in';

@NgModule({
  declarations: [
    AddLogInPage,
  ],
  imports: [
    IonicPageModule.forChild(AddLogInPage),
  ],
})
export class AddLogInPageModule {}
