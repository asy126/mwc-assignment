import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TechonePage } from '../techone/techone';
import { TechtwoPage } from '../techtwo/techtwo';
import { TechthreePage } from '../techthree/techthree';

/**
 * Generated class for the TechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tech',
  templateUrl: 'tech.html',
})
export class TechPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TechPage');
  }

  showtechone() {
    this.navCtrl.push(TechonePage);
  
  }
  showtechtwo() {
    this.navCtrl.push(TechtwoPage);
  
  }
  showtechthree() {
    this.navCtrl.push(TechthreePage);
  
  }
  


}
