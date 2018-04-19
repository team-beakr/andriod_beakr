import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appCtrl: App) {

  }

  pushPage(p) {
    // console.log(p);
    this.navCtrl.push(p);
  }

  logoutUser() {
    localStorage.removeItem('local_user');
    // this.navCtrl.setRoot('LoginPage');
    // this.navCtrl.setRoot(this.navCtrl.parent);
    // this.navCtrl.goToRoot();
    this.appCtrl.getRootNav().setRoot('LoginPage');

    // console.log(this.navCtrl.parent);
    // console.log(this.navCtrl.parent.root);
  }

}
