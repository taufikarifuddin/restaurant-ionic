import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private loadingCtrl:LoadingController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  onFormSubmit($event){
    let modal = this.getDefaultModal();
    modal.present();
    setTimeout(() => {
      modal.dismiss();
      this.navCtrl.pop();
    }, 3000);
  }

  getDefaultModal():Loading{
    return this.getModal("Please Wait..");
  }

  getModal(content:string):Loading{
    return this.loadingCtrl.create({
      content:content,      
    });
  }

}
