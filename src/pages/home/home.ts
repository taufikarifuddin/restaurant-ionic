import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { UserFormDtoLogin } from '../../components/login-form/user.form.dto';
import { LoginPage } from '../login/login';
import { UserDto } from './user.home.dto';
import { FoodCategory, Food } from './category.dto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private user:UserDto;
  private categories:FoodCategory[];

  constructor(private navCtrl:NavController,
                private loadingCtrl:LoadingController){
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
    let food:Food[] = [new Food(),new Food(),new Food()]; 

    this.categories = [new FoodCategory("category 1",food),new FoodCategory("category 2",food),new FoodCategory("category 3",food)];
    console.log(this.categories);
  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

}
