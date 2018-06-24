import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USER_AUTH } from '../api-constant/api-constant';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  login(data:any){
    return new Promise( resolve => {
      this.http.post(USER_AUTH,data)
        .subscribe( data => {
          resolve(data);
        },err => {
          console.log(err);
        })
    });
  
  }
}
