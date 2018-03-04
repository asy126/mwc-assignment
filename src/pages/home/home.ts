import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MenuPage} from '../menu/menu';
import { detailListServer } from '../../server/detail-lists/detail-lists.server';
import { Observable } from 'rxjs/Observable';
import { Detail } from '../../Login/details/details.Login';
// import {ListPage} from '../list/list';
// import {ContentPage} from '../content/content';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  detailList$: Observable<Detail[]>

  constructor(public navCtrl: NavController, private list: detailListServer) {
    this.detailList$ = this.list
      .getDetailList() //DB list
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        }
      )
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