import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApi } from '../../providers/rest-api/rest-api';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers: [RestApi]
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: RestApi) {
    api.getUsers()
    .then(data => {
      console.log(data);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
