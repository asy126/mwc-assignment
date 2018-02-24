import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

import { CareonePage } from '../careone/careone';
import { CaretwoPage } from '../caretwo/caretwo';
import { CarethreePage } from '../carethree/carethree';

/**
 * Generated class for the HealthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class HealthPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthPage');
  }

  showcareone() {
    this.navCtrl.push( CareonePage);
  
  }
  showcareteo() {
    this.navCtrl.push( CaretwoPage);
  
  }
  showcarethree() {
    this.navCtrl.push( CarethreePage);
  
  }
  

}
