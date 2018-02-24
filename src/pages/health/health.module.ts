import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthPage } from './health';

import { CareonePage } from '../careone/careone';
import { CaretwoPage } from '../caretwo/caretwo';
import { CarethreePage } from '../carethree/carethree';

@NgModule({
  declarations: [
    HealthPage,
    CareonePage,
    CaretwoPage,
    CarethreePage

  ],
  imports: [
    IonicPageModule.forChild(HealthPage),
    IonicPageModule.forChild(CareonePage),
    IonicPageModule.forChild(CaretwoPage),
    IonicPageModule.forChild(CarethreePage),
  ],
})

export class HealthPageModule {}

export class CareonePageModule {}

export class CaretwoPageModule {}

export class CarethreePageModule {}

