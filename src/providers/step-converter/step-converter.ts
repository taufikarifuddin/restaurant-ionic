import { Injectable } from '@angular/core';
import {SUCCESS,DOING_BY_KOKI} from '../order-service/order-service';
/*
  Generated class for the StepConverterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StepConverterProvider {

  constructor() {
    console.log('Hello StepConverterProvider Provider');
  }

  convertToStringMessage(status):string{
    switch(status){
      case DOING_BY_KOKI : return "Cheff will cook your food";
      case SUCCESS : return "Your Order already for you, your food will be there in a second";
      default : return "Unidentified Status";
    }
  }

}
