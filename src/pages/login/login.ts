import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 
  constructor(private navCtrl: NavController,
    private loadingCtrl:LoadingController ) {


  }

  onFormSubmit($event){
    let data = $event;
    this.showModal();
    if( this.validate(data) ){
      setTimeout( () => {
                
      },3000);
    }

  }

  validate(data){
    return true;
  }

  showModal(){
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });

    loader.present();

    console.log('in');
  }

  onRegisterClick(){
    this.navCtrl.push(RegisterPage);
  }

}
