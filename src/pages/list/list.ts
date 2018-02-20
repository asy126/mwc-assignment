import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {ContentPage} from '../content/content';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(public navCtrl: NavController) {
  }
//  remove ---->>>>  ,public navParams: NavParams

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  showcontent() {
    this.navCtrl.push(ContentPage);
  
  }
  // this.navCtrl.pop(); to get back to nav
  
}
