import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  public local_user;

  email: string;
  username: string;
  password: string;
  password2: string;
  signUpForm: FormGroup;
  formError: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {

    this.signUpForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      password2: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewWillEnter() {
    let ls = localStorage.getItem("local_user");
    if (ls != 'undefined' && ls != null) {
      this.local_user = JSON.parse(ls);
    }

    if(this.local_user) {
        console.log('A user is already created');
        this.navCtrl.setRoot('MenuPage');
    }
  }

  doSignUp() {
    if(!this.signUpForm.valid || this.password != this.password2){
      this.formError = 'true';
      if (this.password != this.password2) {
        this.formError = 'pass';
      }
    } else {
      console.log(this.email);
      console.log(this.username);
      console.log(this.password);
      console.log(this.password2);

      // console.log(this.emailUsername(this.email));

      // HANDLE NEW USER CREATION
      let newUser = {
      	"email": this.email,
      	"username": this.username,
      	"name": {
      		"middleName": null,
      		"lastName": null,
      		"firstName": null
      	},
        "standing": 'Freshman',
        "major": null,
        "minor": null,
        "gpa": null
      };

      localStorage.setItem("local_user", JSON.stringify(
        newUser
      ));
      console.log(newUser);

      this.navCtrl.setRoot('MenuPage');
    }
  }

  // emailUsername(emailAddress) {
  //    return emailAddress.match(/^(.+)@/)[1];
  // }

  doLogin() {
    this.navCtrl.setRoot('LoginPage');
  }

}
