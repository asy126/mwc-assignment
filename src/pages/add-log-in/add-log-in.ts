import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { detailListServer } from '../../server/detail-lists/detail-lists.server';
import { Detail } from '../../Login/details/details.Login';

/**
 * Generated class for the AddLogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-log-in',
  templateUrl: 'add-log-in.html',
})
export class AddLogInPage {
  detail: Detail = {
    Name: '',
    Password: '',
    Email: '',

  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private LogInDetail: detailListServer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddLogInPage');
  }


  addDetail(detail: Detail){
    this.LogInDetail.addDetail(detail).then(ref =>{
      this.navCtrl.setRoot('home', {key: ref.key})
    });
  }
}
