import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApi } from '../../providers/rest-api/rest-api';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers: [RestApi]
})
export class DashboardPage {
  // data: any;
  offerings: any;
  // user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: RestApi
  ) {

    api.getOfferings()
      .then(offerings => {
        this.offerings = offerings;

        console.log(offerings);
      })

    // api.getUser('-L8cb0C5bvG_7NBaMiib')
    //   .then(user => {
    //     this.user = user;
    //
    //     console.log(user);
    //   })
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad DashboardPage');
  }

  viewOpportunity(opp) {
    // console.log('view opportunity');
    // console.log(opp);
    this.navCtrl.push('ResearchOppPage', {
      opportunity: opp
    });
  }

}
