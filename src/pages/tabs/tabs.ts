import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController, } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  DashRoot: any = 'DashboardPage';
  ProfileRoot: any = 'ProfilePage';
  SearchRoot: any = 'SearchPage';
  // InboxRoot: any = 'InboxPage';
  myIndex: number;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }

  search() {
    // go to search page
  }

}
