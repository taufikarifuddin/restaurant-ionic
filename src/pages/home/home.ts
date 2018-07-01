import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController, ToastController, ViewController } from 'ionic-angular';
import { UserDto } from './user.home.dto';
import { FoodCategory, Food } from './category.dto';
import { CheckoutModalComponent } from '../../components/checkout-modal/checkout-modal';
import { OrderHistoryPage } from '../order-history/order-history';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { ItemServiceProvider } from '../../providers/item-service/item-service';
import { OrderServiceProvider } from '../../providers/order-service/order-service';
import { SocketIoServiceProvider } from '../../providers/socket-io-service/socket-io-service';
import { ProgressModalComponent } from '../../components/progress-modal/progress-modal';
import { RejectModalComponent } from '../../components/reject-modal/reject-modal';
import { SettingModalComponent } from '../../components/setting-modal/setting-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  user:UserDto;
  categories:FoodCategory[] = [];
  choosenCategory:string; 
  settings:any;

  constructor(private navCtrl:NavController,
                private loadingCtrl:LoadingController,
                private modalCtrl:ModalController,
                private toastCtrl:ToastController,
                private storage:Storage,
                private viewCtrl:ViewController,
                private itemService:ItemServiceProvider,
                private orderService:OrderServiceProvider,
                private socketService:SocketIoServiceProvider
              ){
    this.user = new UserDto();    
  }
  ionViewDidLoad(){
  
    this.storage.get('setting').then( val =>{
      this.settings = val;
    });

    this.storage.get('user').then( (val)  => {
      if( val == null || !val ){
        this.navCtrl.push(LoginPage);
        this.viewCtrl.dismiss();
      }else{
        this.user.saldo = val.current_saldo;
        this.user.username = val.username;
      }
    });    

    this.getDataFromServer();
    this.socketService.listen(data =>{
      console.log('send back',data);
      this.onNotifReject(data);
    },data => {
      console.log('change process',data);
      this.notify(data);
    })
  }

  onNotifReject(data){
    let stateQtyFood = data.orderItem;
    stateQtyFood.forEach(val =>{
      this.categories.forEach(value =>{
        value.setQtyFood(val.foodId,val.qty);
      })
    });
    let modal = this.modalCtrl.create(RejectModalComponent,{ data : data.reject });
    modal.present();
  }

  notify(data){
    let modal = this.modalCtrl.create(ProgressModalComponent,{ data : data });
    modal.present();
    modal.onDidDismiss( val =>{
        if( val ){
          this.goHistory();
        }
      });
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
              foodsItem.push(new Food(v.id,v.name,v.desc,v.price,v.status,v.fotoPath));
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
    modal.onDidDismiss((data) => {
      if( data.approve ){
        if( data.total > this.user.saldo ){
          this.toastCtrl.create({
            message : 'Insufficient Saldo, Your Saldo '+(data.total - parseInt(this.user.saldo))+',You can topup saldo on Cashier !!',
            position : 'middle',
            duration: 2000
          }).present();
        }else{
          this.orderRequest(data.item,data.total);
        }
      }
    })
  }

  resetQty(){
    this.categories.forEach(val =>{
      val.resetAllQtyFood();
    })
  }

  setting(){
    let modal = this.modalCtrl.create(SettingModalComponent);
    modal.present();
    modal.onDidDismiss(data =>{
      this.settings = data;
    })
  }

  orderRequest(data:any,total:any){
    let request:any = {};
    this.storage.get('user').then( (val)  => {
      if( val == null || !val ){
        this.navCtrl.push(LoginPage);
        this.viewCtrl.dismiss();
      }else{
        request['order_user_id'] = val.id;
        request['order_total_price'] = total;
        request['order_table_number'] = 1;
        request['order_item'] = [];
        data.forEach(elem => {
          request['order_item'].push({
            'food_id':elem.id,
            'food_qty':elem.qty
          });
        });
        
        this.orderService.order(request)
        .then( result => {            
          let resp:any = result;
          if( resp.code == 200 ){
            this.resetQty();
            this.toastCtrl.create({
              message : "Ordered Success",
              duration:3000,
              position:'middle'
            }).present();    
          }
        })
      }
    });   
  }

}
