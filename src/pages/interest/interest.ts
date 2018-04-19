import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InterestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interest',
  templateUrl: 'interest.html',
})
export class InterestPage {
  public interests;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    let ls = localStorage.getItem("interests");
    if (ls != 'undefined' && ls != null) {
      this.interests = JSON.parse(ls);
    }

    if(this.interests) {
        console.log('A user is already created');
    }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad InterestPage');
  }

}
