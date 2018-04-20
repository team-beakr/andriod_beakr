import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-interest',
  templateUrl: 'interest.html',
})
export class InterestPage {
  public interests = [];
  interest: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    let ls = localStorage.getItem("interests");
    if (ls == 'undefined' || ls == null) {
      localStorage.setItem('interests', JSON.stringify(this.interests));
    }

    if (ls != 'undefined' && ls != null) {
      this.interests = JSON.parse(ls);
    }

    // if(this.interests) {
    //     console.log('interests exists');
    // }
  }

  addInterest() {
    if (!this.interest) { return }

    var i_check = this.interests.map(function(e) { return e.name; }).indexOf(this.interest);

    if (i_check != -1) {
      this.interest = null;
      console.log(i_check);
      return
    }
    console.log(i_check);

    let new_interest = {
      'name': this.interest
    };

    this.interests.push(new_interest);
    localStorage.setItem("interests", JSON.stringify(this.interests));

    console.log(this.interest);
    this.interest = null;
  }

  removeInterest(i_name) {
    // console.log(i_name);
    // console.log(this.interests);
    // console.log(this.interests.map(function(e) { return e.name; }).indexOf(i_name));
    // var tempInterest = JSON.parse(localStorage.getItem("interests"));

    this.interests.splice(
      this.interests.map(function(e) { return e.name; }).indexOf(i_name), 1
    );

    localStorage.setItem("interests", JSON.stringify(this.interests));
    this.interests = JSON.parse(localStorage.getItem("interests"));
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad InterestPage');
  }

}
