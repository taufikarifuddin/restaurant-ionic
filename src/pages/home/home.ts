import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController, ToastController } from 'ionic-angular';
import { UserDto } from './user.home.dto';
import { FoodCategory, Food } from './category.dto';
import { CheckoutModalComponent } from '../../components/checkout-modal/checkout-modal';
import { OrderHistoryPage } from '../order-history/order-history';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  user:UserDto;
  categories:FoodCategory[];
  choosenCategory:string; 

  constructor(private navCtrl:NavController,
                private loadingCtrl:LoadingController,
                private modalCtrl:ModalController,
                private toastCtrl:ToastController,
                private storage:Storage
              ){
    this.user = new UserDto();
   
  }

  ion

  ionViewDidLoad(){
    let loading = this.loadingCtrl.create({
      content : "Getting data from server",
      duration : 1000
    })

    this.storage.get('username').then( (val)  => {
      if( !val ){
        this.navCtrl.push(LoginPage);
      }
      console.log(val);
    });    
    loading.present().then(() => {
      this.getDataFromServer();
      loading.dismiss();
    });
  }

  getDataFromServer(){
    this.categories = [];
    for (let index = 0; index < 3; index++) {
      let food:Food[] = [new Food(),new Food(),new Food()]; 
      this.categories.push(new FoodCategory("Category "+index,food));
    }
  }

  goToCheckout(){
    let orderItem:Food[] = [];
    this.categories.forEach((val,index) => {
      console.log(val.getOrderedItem());
      orderItem = orderItem.concat(val.getOrderedItem());
    });    
    if( orderItem.length > 0 ){
      this.presentModal(orderItem);
    }else{
      this.toastCtrl.create({
        message : "Please at least choose 1 menu for ordering",
        position:'middle',
        duration:3000
      }).present();
    }
  }

  toggleDropDown(index){
    this.categories[index].open = !this.categories[index].open;
  }

  increaseQty(i,j){
    ++this.categories[i].foods[j].qty;
  }

  decreaseQty(i,j){
    if( this.categories[i].foods[j].qty > 0 ){
      --this.categories[i].foods[j].qty;
    }
  }

  goHistory(){
    this.navCtrl.push(OrderHistoryPage);
  }

  logOut(){
    this.navCtrl.push(LoginPage);
  }

  presentModal(foods:Food[] = []){
    let modal = this.modalCtrl.create(CheckoutModalComponent,{foods : foods});
    modal.present();
    modal.onDidDismiss((data,role) => {
      if( data.approve ){
        this.toastCtrl.create({
          message : "Ordered Success",
          duration:3000,
          position:'middle'
        }).present();
      }
    })
  }

}
