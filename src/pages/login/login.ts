import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestApi } from '../../providers/rest-api/rest-api';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [RestApi]
})
export class LoginPage {

  public local_user;
  user: any;

  username: string;
  password: string;
  loginForm: FormGroup;
  formError: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: RestApi,
    public formBuilder: FormBuilder
  ) {
      // this.checkUser();

      this.loginForm = formBuilder.group({
        username: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required])]
      });
  }

  ionViewWillEnter() {
    let ls = localStorage.getItem("local_user");
    // console.log(ls);
    if (ls != 'undefined' && ls != null) {
      // console.log('Got past')
      this.local_user = JSON.parse(ls);
    }

    if(this.local_user) {
        console.log('A user is already created');
        this.navCtrl.setRoot('MenuPage');
    }
    // console.log(this.local_user);
    // console.log(this.navCtrl);
  }

  checkUser() {
    this.api.getUser('-L8cb0C5bvG_7NBaMiib')
      .then(user => {
        this.user = user;

        // console.log(this.user);
      });

    // console.log(this.user);
  }

  doLogin() {
    localStorage.removeItem('local_user');

    if (!this.loginForm.valid){
      this.formError = 'true';
    } else if (this.username != 'demoUser') {
      this.formError = 'invalid';
    } else {
      // this.checkUser();

      console.log(this.username);
      // if (this.username == 'demoUser') {
        // console.log(this.password);
        //
        // if (this.user = 'undefined') {
        //   this.user = {
        //     // "email": {
        //     //   "domain":"gmail.com",
        //     //   "username":"jpm61704"
        //     // },
        //     // "faculty":null,
        //     // "name": {
        //     //   "middleName":"Paul",
        //     //   "lastName":"Martin",
        //     //   "firstName":"Jack"
        //     // },
        //     // "student":null
        //
        //     "email": 'jpm61704@gmail.com',
        //   	"username": 'demo',
        //   	"name": {
        //   		"middleName": 'Paul',
        //   		"lastName": 'Martin',
        //   		"firstName": 'Jack'
        //   	},
        //     "standing": 'Senior',
        //     "major": 'Computer Science',
        //     "minor": 'Math',
        //     "gpa": '3.98'
        //   }
        // }
        this.user = {
          "email": 'jpm61704@gmail.com',
          "username": 'demoUser',
          "name": {
            "middleName": 'Paul',
            "lastName": 'Martin',
            "firstName": 'Jack'
          },
          "standing": 'Senior',
          "major": 'Computer Science',
          "minor": 'Math',
          "gpa": '3.98'
        }

      // }

      localStorage.setItem("local_user", JSON.stringify(
        this.user
      ));
      console.log(this.user);

      this.navCtrl.setRoot('MenuPage');
    }
  }

  doSignUp() {
    this.navCtrl.setRoot('SignupPage');
  }

}
