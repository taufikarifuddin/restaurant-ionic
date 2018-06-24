import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Order } from '../../pages/order-history/order.dto';
import { Food } from '../../pages/home/category.dto';

/**
 * Generated class for the DetailHistoryOrderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detail-history-order',
  templateUrl: 'detail-history-order.html'
})
export class DetailHistoryOrderComponent {

  order:Order;
  total:number = 0;

  constructor(private viewCtrl:ViewController,private navParam:NavParams) {
    this.order = this.navParam.get('data');
  }

  ionViewDidLoad(){
    let orders = [];
    orders.push(new Food());
    orders.forEach((val,index)=>{
      this.total += val.qty * val.price;
    })
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
