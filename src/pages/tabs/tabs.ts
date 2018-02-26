import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home_page = HomePage;
  profile_page = ProfilePage;
  // inbox_page = InboxPage;
  // settings_page = SettingsPage;

  about_page = AboutPage;
  contact_page = ContactPage;

  constructor() {

  }
}
