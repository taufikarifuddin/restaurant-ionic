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
  orders:Food[];
  total:number = 0;

  constructor(private viewCtrl:ViewController,private navParam:NavParams) {
    this.order = this.navParam.get('data');
    this.orders = this.order.items;
  }

  ionViewDidLoad(){
    this.order.items.forEach((val,index)=>{
      this.total += val.price;
    })
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
