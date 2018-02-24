import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechPage } from './tech';

import { TechonePage } from '../techone/techone';
import { TechtwoPage } from '../techtwo/techtwo';
import { TechthreePage } from '../techthree/techthree';

@NgModule({
  declarations: [
    TechPage,
    TechonePage,
    TechtwoPage,
    TechthreePage


  ],
  imports: [
    IonicPageModule.forChild(TechPage),
    IonicPageModule.forChild(TechonePage),
    IonicPageModule.forChild(TechtwoPage),
    IonicPageModule.forChild(TechthreePage),


  ],
})
export class TechPageModule {}

export class TechonePageModule {}

export class TechtwoPageModule {}

export class TechthreePageModule {}
