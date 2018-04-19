import { HttpClient/*, HttpHeaders*/ } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { RequestOptions, Headers } from '@angular/http';

/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestApi {
  data: any;
  apiUrl = 'https://jsonplaceholder.typicode.com';


  user: any;
  offerings: any;
  messages: any;
  base_apiURL = '/api';
  // Proxy for apiURL is in ionic.config.json
  // base_apiURL = 'https://beakr-api.herokuapp.com';

  constructor(public http: HttpClient) {
    // console.log('Hello RestApiProvider Provider');
  }

  getUser(user_id) {
    if (this.user) {
      return Promise.resolve(this.user);
    }

    // console.log(user_id);

    return new Promise(resolve => {
      this.http.get(this.base_apiURL + '/user/' + user_id)
        .subscribe(
          user => {
            this.user = user;
            resolve(this.user);
          }, err => {
            console.log(err);
          }
        );
    });
  }

  getOfferings() {
    if (this.offerings) {
      return Promise.resolve(this.offerings);
    }

    // let header = new HttpHeaders();
    // header.append('Access-Control-Allow-Origin', '*');

    return new Promise(resolve => {
      this.http.get(this.base_apiURL + '/offerings')
        .subscribe(
          offerings => {
            this.offerings = offerings;
            resolve(this.offerings);
          }, err => {
            console.log(err);
          }
        );
    });
  }

  getMessages() {
    if (this.messages) {
      return Promise.resolve(this.messages);
    }

    // let header = new HttpHeaders();
    // header.append('Access-Control-Allow-Origin', '*');

    return new Promise(resolve => {
      this.http.get(this.base_apiURL + '/messages')
        .subscribe(
          messages => {
            this.messages = messages;
            resolve(this.messages);
          }, err => {
            console.log(err);
          }
        );
    });
  }

  getUsers() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users')
        .subscribe(
          data => {
            this.data = data;
            resolve(this.data);
          }, err => {
            console.log(err);
          }
        );
    });

  }

  // getPosts() {
  //   if (this.data) {
  //     return Promise.resolve(this.data);
  //   }
  //
  //   return new Promise(resolve => {
  //     this.http.get(this.apiUrl+'/posts')
  //       .subscribe(
  //         data => {
  //           this.data = data;
  //           resolve(this.data);
  //         }, err => {
  //           console.log(err);
  //         }
  //       );
  //   });
  //
  // }

  // getTodos() {
  //   if (this.data) {
  //     return Promise.resolve(this.data);
  //   }
  //
  //   return new Promise(resolve => {
  //     this.http.get(this.apiUrl+'/todos')
  //       .subscribe(
  //         data => {
  //           this.data = data;
  //           resolve(this.data);
  //         }, err => {
  //           console.log(err);
  //         }
  //       );
  //   });
  //
  // }

}
