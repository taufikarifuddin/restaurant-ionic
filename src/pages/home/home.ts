import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController, ToastController, ViewController } from 'ionic-angular';
import { UserDto } from './user.home.dto';
import { FoodCategory, Food } from './category.dto';
import { CheckoutModalComponent } from '../../components/checkout-modal/checkout-modal';
import { OrderHistoryPage } from '../order-history/order-history';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { ItemServiceProvider } from '../../providers/item-service/item-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [ItemServiceProvider]
})
export class HomePage{

  user:UserDto;
  categories:FoodCategory[] = [];
  choosenCategory:string; 

  constructor(private navCtrl:NavController,
                private loadingCtrl:LoadingController,
                private modalCtrl:ModalController,
                private toastCtrl:ToastController,
                private storage:Storage,
                private viewCtrl:ViewController,
                private itemService:ItemServiceProvider
              ){
    this.user = new UserDto();
   
  }
  ionViewDidLoad(){
  
    this.storage.get('user').then( (val)  => {
      if( val == null || !val ){
        this.viewCtrl.dismiss();
        this.navCtrl.push(LoginPage);
      }else{
        this.user.saldo = val.current_saldo;
        this.user.username = val.username;
      }
    });    

    this.getDataFromServer();
  }

  getDataFromServer(){

    let loading = this.loadingCtrl.create({
      content : "Getting data from server",
      duration : 1000
    })

    loading.present().then(() => {
      this.itemService.getMenu()
        .then( resp => {
          let cat:FoodCategory[] = <FoodCategory[]> resp;
          cat.forEach((val) => {
            let newCat:FoodCategory = new FoodCategory(val.name);
            let foodsItem:Food[]= [];
            val.foods.forEach( (v) => {
              foodsItem.push(new Food(v.name,v.desc,v.price,v.status,v.fotoPath));
            })
            newCat.foods = foodsItem;
            this.categories.push(newCat);
          })
        })
    });

  }

  goToCheckout(){
    let orderItem:Food[] = [];
    this.categories.forEach((val,index) => {
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
    console.log(this.categories[i].foods[j].qty);
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
    this.storage.remove('user');
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
