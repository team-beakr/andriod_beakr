import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-research-opp',
  templateUrl: 'research-opp.html',
})
export class ResearchOppPage {

  opportunity;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.opportunity = navParams.get('opportunity');
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ResearchOppPage');
  }

}
