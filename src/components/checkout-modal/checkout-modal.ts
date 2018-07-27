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
  tempTotal:number = 0;
  isSufficientSaldo:boolean = false;
  isUseSaldo:boolean = false;

  constructor(private viewCtrl:ViewController,private params:NavParams) {
    this.orders = this.params.get('foods');    
    console.log(this.orders);
  }

  updateIsUsingSaldo(){
    this.isUseSaldo = !this.isUseSaldo;
    if( this.isUseSaldo ){
      this.total = this.tempTotal - ( this.tempTotal * 5 / 100) ;
    }
    console.log(this.isUseSaldo);
  }

  dismiss() {
    this.viewCtrl.dismiss({ approve:false });
  }

  ionViewDidLoad(){
    this.orders.forEach((val,index)=>{
      this.total += val.qty * val.price;
    })

    if( this.total <= this.params.get('currentSaldo') ){
      this.isSufficientSaldo = true;
      this.isUseSaldo = true;
      this.tempTotal = this.total;
    }
  }

  confirm(){
    this.viewCtrl.dismiss({ approve : true,total : this.total,item : this.orders,isUseSaldo:this.isUseSaldo });
  }

}
