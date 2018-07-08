import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TABLE_REGISTER, TABLE_LOGOUT, TABLE_LOGIN } from '../api-constant/api-constant';

/*
  Generated class for the SeatTableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SeatTableProvider {

  constructor(public http: HttpClient) {

  }

  register(seat){
    return new Promise(resolve => {
        this.http.post(TABLE_REGISTER,{ seat : seat })
          .subscribe( result => {
            resolve(result);
          },
          err => {
            console.log(err);
          });
    })
  }

  login(seat,user){
    return new Promise( resolve =>{
      this.http.post(TABLE_LOGIN,{ seat : seat, user : user })
        .subscribe( result => {
          resolve(result);
        })
    })
  }

  logout(seat){
    return new Promise( resolve =>{
      this.http.post(TABLE_LOGOUT,{ seat : seat })
        .subscribe( result => {
          resolve(result);
        })
    })
  }

}
