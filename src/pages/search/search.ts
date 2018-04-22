import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApi } from '../../providers/rest-api/rest-api';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [RestApi]
})
export class SearchPage {
  offerings: any;
  full_offerings: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: RestApi
  ) {
    // api.getOfferings()
    //   .then(offerings => {
    //     this.offerings = offerings;
    //   });
    // this.generateTopics();
    this.grabOfferings();
    // console.log(this.full_offerings);
    // console.log(this.offerings);
  }

  viewOpportunity(opp) {
    this.navCtrl.push('ResearchOppPage', {
      opportunity: opp
    });
  }

  grabOfferings() {
    this.api.getOfferings()
      .then(offerings => {
        this.offerings = offerings;
        this.full_offerings = this.offerings;
        console.log("full_offerings: "+this.full_offerings);
      });
  }

  searchOfferings(ev: any) {
    // this.grabOfferings();
    this.offerings = this.full_offerings;
    // console.log(this.full_offerings);
    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      let filt = this.offerings.filter((offering) => {
        // console.log('offering: ' + offering);
        // console.log('offering-title: ' + offering.object.title);
        // console.log('serVal: ' + serVal);
        // console.log(offering.object.title.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
        return (offering.object.title.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
      this.offerings = filt;
    }
    // console.log(this.offerings);
  }

  // topics: string[];
  //
  // generateTopics() {
  //   this.topics = [
  //     'Storage in Ionic 2',
  //     'Ionic 2 - calendar',
  //     'Creating a Android application using ionic framework.',
  //     'Identifying app resume event in ionic - android',
  //     'What is hybrid application and why.?',
  //     'Procedure to remove back button text',
  //     'How to reposition ionic tabs on top position.',
  //     'Override Hardware back button in cordova based application - Ionic',
  //     'Drupal 8: Enabling Facets for Restful web services',
  //     'Drupal 8: Get current user session',
  //     'Drupal 8: Programatically create Add another field - Example',
  //   ];
  //
  //
  // }
  //
  // getTopics(ev: any) {
  //   this.generateTopics();
  //   let serVal = ev.target.value;
  //   if (serVal && serVal.trim() != '') {
  //     this.topics = this.topics.filter((topic) => {
  //       return (topic.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
  //     })
  //   }
  // }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SearchPage');
    this.grabOfferings();
  }

}
