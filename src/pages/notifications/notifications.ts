import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApi } from '../../providers/rest-api/rest-api';

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
  providers: [RestApi]
})
export class NotificationsPage {
  messages: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: RestApi
  ) {
    api.getMessages()
      .then(messages => {
        this.messages = messages;

        console.log(messages);
      })
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NotificationsPage');
  }

}
