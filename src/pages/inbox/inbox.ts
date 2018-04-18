import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApi } from '../../providers/rest-api/rest-api';

/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
  providers: [RestApi]
})
export class InboxPage {
  messages: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: RestApi
  ) {
    api.getUsers()
    .then(data => {
      this.messages = data;
      console.log(data);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }

}
