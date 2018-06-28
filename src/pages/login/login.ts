import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HomePage } from '../home/home';

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
    private storage:Storage,
    private userService:UserServiceProvider,
    private toast:ToastController) {    
  }

  onFormSubmit($event){
    let data = $event;
  
    if( this.validate(data) ){
      this.userService.login(data)
        .then( response => {
          let resp:any = response;
          if( !resp.data.status ){
            this.toast.create({ 
              message : resp.data.message,
              position:'middle',
              duration:1000
            }).present();
          }else{
            this.storage.set('user',resp.data.user);
            this.navCtrl.push(HomePage);
          }
        });
    }
  }
  

  validate(data){
    return true;
  }

  onRegisterClick(){
    this.navCtrl.push(RegisterPage);
  }

}
