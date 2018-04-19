import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MenuPage } from './../menu/menu';

interface UserInterface {
  email?: string,
  username?: string;
  firstName?: string;
  lastName?: string;
  standing?: string;
  major?: string;
  minor?: string;
  gpa?: string;
}

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public local_user;
  user: UserInterface = {};

  email: string;
  username: string;
  firstName: string;
  lastName: string;
  major: string;
  minor: string;
  gpa: string;
  // profileForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuPage
    // public formBuilder: FormBuilder
  ) {

    // this.profileForm = this.formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: [''],
    // });

    let ls = localStorage.getItem("local_user");
    if (ls != 'undefined' && ls != null) {
      this.local_user = JSON.parse(ls);
    }

    if (this.local_user.email != 'undefined') {this.user.email = this.local_user.email;}
    if (this.local_user.username != 'undefined') {this.user.username = this.local_user.username;}
    if (this.local_user.name.firstName != 'undefined') {this.user.firstName = this.local_user.name.firstName;}
    if (this.local_user.name.lastName != 'undefined') {this.user.lastName = this.local_user.name.lastName;}
    if (this.local_user.standing != 'undefined') {this.user.standing = this.local_user.standing;}
    if (this.local_user.major != 'undefined') {this.user.major = this.local_user.major;}
    if (this.local_user.minor != 'undefined') {this.user.minor = this.local_user.minor;}
    if (this.local_user.gpa != 'undefined') {this.user.gpa = this.local_user.gpa;}
  }

  ionViewDidLoad() {
    // let ls = localStorage.getItem("local_user");
    // if (ls != 'undefined' && ls != null) {
    //   this.local_user = JSON.parse(ls);
    // }
    //
    // if (this.local_user.email != 'undefined') {this.user.email = this.local_user.email;}
    // if (this.local_user.username != 'undefined') {this.user.username = this.local_user.username;}
    // if (this.local_user.name.firstName != 'undefined') {this.user.firstName = this.local_user.name.firstName;}
    // if (this.local_user.name.lastName != 'undefined') {this.user.lastName = this.local_user.name.lastName;}
    // if (this.local_user.standing != 'undefined') {this.user.standing = this.local_user.standing;}
    // if (this.local_user.major != 'undefined') {this.user.major = this.local_user.major;}
    // if (this.local_user.minor != 'undefined') {this.user.minor = this.local_user.minor;}
    // if (this.local_user.gpa != 'undefined') {this.user.gpa = this.local_user.gpa;}
    console.log(this.user);
    console.log(this.local_user);
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.user.email);
    console.log(this.user.standing);
    console.log(this.major);
    console.log(this.minor);
    console.log(this.gpa);

  }

  updateProfile() {
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.user.email);
    console.log(this.user.standing);
    console.log(this.major);
    console.log(this.minor);
    console.log(this.gpa);

    if (this.user.email != this.local_user.email) {
      this.local_user.email = this.user.email;
      // localStorage.setItem("local_user", JSON.stringify(this.local_user));
    } if (this.firstName != this.local_user.name.firstName) {
      this.local_user.name.firstName = this.firstName;
      this.user.firstName = this.firstName;

    } if (this.lastName != this.local_user.name.lastName) {
      this.local_user.name.lastName = this.lastName;
      this.user.lastName = this.lastName;

    } if (this.user.standing != this.local_user.standing) {
      this.local_user.standing = this.user.standing;

    } if (this.major != this.local_user.major) {
      this.local_user.major = this.major;
      this.user.major = this.major;

    } if (this.minor != this.local_user.minor) {
      this.local_user.minor = this.minor;
      this.user.minor = this.minor;

    } if (this.gpa != this.local_user.gpa) {
      this.local_user.gpa = this.gpa;
      this.user.gpa = this.gpa;

    }

    localStorage.setItem("local_user", JSON.stringify(this.local_user));
    // location.reload();
    this.menu.refreshEmail();
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

}
