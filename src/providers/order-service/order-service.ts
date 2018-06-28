import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ORDER} from '../api-constant/api-constant';

/*
  Generated class for the OrderServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderServiceProvider {

  constructor(public http: HttpClient) {
  }

  order(data){
    return new Promise( resolve => {
      this.http.post(ORDER,data)
        .subscribe( response => {
          console.log(response);
          resolve(response)
        },
        err => {
          console.log(err);
        });
    });
  }

}
