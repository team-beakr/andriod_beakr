import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  doLogin() {
    this.navCtrl.setRoot('LoginPage');
  }

  doSignUp() {
    this.navCtrl.setRoot('MenuPage');
  }

}
