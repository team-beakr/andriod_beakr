import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';

// import { TabsPage } from './../tabs/tabs';
//
// import { DashboardPage } from './../dashboard/dashboard';
// import { ProfilePage } from './../profile/profile';
// import { InboxPage } from './../inbox/inbox';


export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  // Basic root for our content view
  rootPage = 'TabsPage';

  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Dashboard', pageName: 'TabsPage', tabComponent: 'DashboardPage', index: 0, icon: 'home' },
    { title: 'Profile', pageName: 'TabsPage', tabComponent: 'ProfilePage', index: 1, icon: 'contact' },
    { title: 'Inbox', pageName: 'TabsPage', tabComponent: 'InboxPage', index: 2, icon: 'mail-open' },
    { title: 'Search', pageName: 'SearchPage', icon: 'search' },
    { title: 'Settings', pageName: 'SettingsPage', icon: 'settings' },
    { title: 'About', pageName: 'AboutPage', tabComponent: 'AboutPage', icon: '' },
    { title: 'Contact Us', pageName: 'ContactPage', icon: '' },
  ];

  constructor(public navCtrl: NavController) { }

  openPage(page: PageInterface) {
    let params = {};

    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Tabs are not active, so reset the root page
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNavs()[0];

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

}
