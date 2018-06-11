import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { UserFormDtoLogin } from '../../components/login-form/user.form.dto';
import { LoginPage } from '../login/login';
import { UserDto } from './user.home.dto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private user:UserDto;

  constructor(private navCtrl:NavController){
    this.user = new UserDto();
  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

}
