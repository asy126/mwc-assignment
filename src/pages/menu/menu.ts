import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

import {OfficePage} from '../office/office';
import {TechPage} from '../tech/tech';
import {HealthPage} from '../health/health';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  showoffice() {
    this.navCtrl.push(OfficePage);
  }
  showtech() {
    this.navCtrl.push(TechPage);
  }
  showhealth() {
    this.navCtrl.push(HealthPage);
  }
}
