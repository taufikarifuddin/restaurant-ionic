import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';
import { UserFormDtoLogin } from '../../components/login-form/user.form.dto';
import { LoginPage } from '../login/login';
import { UserDto } from './user.home.dto';
import { FoodCategory, Food } from './category.dto';
import { CheckoutModalComponent } from '../../components/checkout-modal/checkout-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:UserDto;
  categories:FoodCategory[];
  choosenCategory:string; 

  constructor(private navCtrl:NavController,
                private loadingCtrl:LoadingController,
                private modalCtrl:ModalController
              ){
    this.user = new UserDto();
  }

  ionViewDidLoad(){
    let loading = this.loadingCtrl.create({
      content : "Getting data from server",
      duration : 1000
    })
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
    this.presentModal(orderItem);
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

  presentModal(foods:Food[] = []){
    let modal = this.modalCtrl.create(CheckoutModalComponent,{foods : foods});
    modal.present();
  }

}
