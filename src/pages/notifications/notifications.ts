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
  messages: any = [
    {
      "subject": "Update your profile",
      "body": "You should go to the profile page and update your information."
    },
    {
      "subject": "Checkout research opportunities",
      "body": "There are lots of opportunities out there for you!!"
    },
    {
      "subject": "Check your inbox",
      "body": "Make sure you aren't missing any opportunities."
    },
    {
      "subject": "Don't Crash",
      "body": "Make sure the demo works."
    }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: RestApi
  ) {
    // api.getMessages()
    //   .then(messages => {
    //     this.messages = messages;
    //
    //     console.log(messages);
    //   })

    // this.messages = [
    //   {
    //     "subject": "Update your profile",
    //     "body": "You should go to the profile page and update your information."
    //   },
    //   {
    //     "subject": "Checkout research opportunities",
    //     "body": "There are lots of opportunities out there for you!!"
    //   },
    //   {
    //     "subject": "Check your inbox",
    //     "body": "Make sure you aren't missing any opportunities."
    //   },
    //   {
    //     "subject": "Don't Crash",
    //     "body": "Make sure the demo works."
    //   }
    // ]
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NotificationsPage');
  }

}
