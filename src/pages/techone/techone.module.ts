import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechonePage } from './techone';

@NgModule({
  declarations: [
    TechonePage,
  ],
  imports: [
    IonicPageModule.forChild(TechonePage),
  ],
})
export class TechonePageModule {}
