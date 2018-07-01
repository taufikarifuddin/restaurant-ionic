import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { Order } from './order.dto';
import { DetailHistoryOrderComponent } from '../../components/detail-history-order/detail-history-order';
import { OrderServiceProvider } from '../../providers/order-service/order-service';
import { Storage } from '@ionic/storage';
import { Food } from '../home/category.dto';

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

  listOrder:Order[] = [];

  constructor(public modalCtrl:ModalController,
          public service:OrderServiceProvider,
          public storage:Storage) {
  }

  ionViewDidLoad() {
    this.getDataFromServer();
  }

  goToDetail(index){
    this.modalCtrl
      .create(DetailHistoryOrderComponent,{ data : this.listOrder[index] })
      .present();
  }

  getDataFromServer(){

    let listOrder = this.listOrder;

    this.storage.get('user')
      .then(val => {
        this.service.orderHistory(val.id)
          .then( rep => {
            let response:Order[] = <Order[]>rep;
            console.log(this.listOrder);
            response.forEach( val =>{
              let items:Food[] = [];
              val.items.forEach(val => {
                items.push(new Food(null,val.name,null,val.price,null,null,val.qty));
              });
              listOrder.push(new Order(val.id,val.date,val.total,items));
            });
          });
      })
    
  }

}
