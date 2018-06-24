import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Food } from '../../pages/home/category.dto';

/**
 * Generated class for the CheckoutModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'checkout-modal',
  templateUrl: 'checkout-modal.html'
})
export class CheckoutModalComponent {

  orders:Food[];
  total:number=0;

  constructor(private viewCtrl:ViewController,private params:NavParams) {
    this.orders = this.params.get('foods');
    console.log(this.orders);
  }

  dismiss() {
    this.viewCtrl.dismiss({ approve:false });
  }

  ionViewDidLoad(){
    this.orders.forEach((val,index)=>{
      this.total += val.qty * val.price;
    })
  }

  confirm(){
    this.viewCtrl.dismiss({ approve : true });
  }

}
