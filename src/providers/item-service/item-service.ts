import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ITEM_GETALL} from '../api-constant/api-constant';

/*
  Generated class for the ItemServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemServiceProvider {

  menu:any;

  constructor(public http: HttpClient) {
    
  }


  getMenu(){
    return new Promise(resolve => {
      if( this.menu != null ){
        resolve(this.menu);
      }else{
        this.http.get(ITEM_GETALL)
          .subscribe( res => {
            resolve(res);
          })
      }    
    });
  }

}
