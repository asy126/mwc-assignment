import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CareonePage } from './careone';

@NgModule({
  declarations: [
    CareonePage,
  ],
  imports: [
    IonicPageModule.forChild(CareonePage),
  ],
})
export class CareonePageModule {}
