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
  data: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: RestApi
  ) {
    api.getPosts()
    .then(data => {
      this.data = data;

      console.log(data);
      // for (let d of data) {
      //   console.log(d.name);
      // }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
