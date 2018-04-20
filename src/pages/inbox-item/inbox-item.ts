import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inbox-item',
  templateUrl: 'inbox-item.html',
})
export class InboxItemPage {
  item;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.item = navParams.get('item');
    console.log(this.item);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad InboxItemPage');
  }

}
