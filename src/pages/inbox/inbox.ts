import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApi } from '../../providers/rest-api/rest-api';

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
    // api.getUsers()
    // .then(data => {
    //   this.messages = data;
    //   console.log(data);
    // })

    api.getMessages()
      .then(messages => {
        this.messages = messages;

        console.log(messages);
      })
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad InboxPage');
  }

}
