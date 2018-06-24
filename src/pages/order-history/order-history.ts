import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { Order } from './order.dto';
import { DetailHistoryOrderComponent } from '../../components/detail-history-order/detail-history-order';

/**
 * Generated class for the OrderHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-history',
  templateUrl: 'order-history.html',
})
export class OrderHistoryPage {

  listOrder:Order[];

  constructor(public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    this.listOrder = [];
    for (let index = 0; index < 10; index++) {
      this.listOrder.push(new Order());      
    }
  }

  goToDetail(index){
    this.modalCtrl
      .create(DetailHistoryOrderComponent,{ data : this.listOrder[index] })
      .present();

  }

}
