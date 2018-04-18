import { HttpClient } from '@angular/common/http';
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

  constructor(public http: HttpClient) {
    console.log('Hello RestApiProvider Provider');
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

  getPosts() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/posts')
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

  getTodos() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/todos')
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

}
