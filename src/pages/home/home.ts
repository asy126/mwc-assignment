import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MenuPage} from '../menu/menu';
// import {ListPage} from '../list/list';
// import {ContentPage} from '../content/content';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

}
  showmenu() {
    this.navCtrl.push(MenuPage);
}

// showlist() {
//   this.navCtrl.push(ListPage);
// }

// showcontent() {
//   this.navCtrl.push(ContentPage);
// }


}