import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

import { OfficeonePage } from '../officeone/officeone';
import { OfficetwoPage } from '../officetwo//officetwo';
import { OfficethreePage } from '../officethree//officethree';



@IonicPage()
@Component({
  selector: 'page-office',
  templateUrl: 'office.html',
})
export class OfficePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficePage');
  }

  showofficeone() {
    this.navCtrl.push(OfficeonePage);
  }
  showofficetwo() {
    this.navCtrl.push(OfficetwoPage);
  }
  showofficethree() {
    this.navCtrl.push(OfficethreePage);
  }
}
