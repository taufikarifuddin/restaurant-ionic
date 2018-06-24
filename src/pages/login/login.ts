import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

 
  constructor(private navCtrl: NavController,
    private loadingCtrl:LoadingController,
    private storage:Storage,
    private userService:UserServiceProvider) {    
  }

  onFormSubmit($event){
    let data = $event;
  
    if( this.validate(data) ){
      this.userService.login(data)
        .then( data => {
          console.log(data);
        });
      // this.storage.set('username',data.username);
      // this.navCtrl.pop();
    }
  }

  validate(data){
    return true;
  }

  onRegisterClick(){
    this.navCtrl.push(RegisterPage);
  }

}
