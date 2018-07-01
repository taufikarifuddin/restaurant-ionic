import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading, ToastController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

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
    private loadingCtrl:LoadingController,
    private service:UserServiceProvider,
    private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  onFormSubmit($event){
    let modal = this.getDefaultModal();
    modal.present();
    this.service.register($event)
      .then( resp => {        

        modal.dismiss();

        let response:any = resp;
        if( response.code != 200 ){
          for( let keys in response.data ){
            response.data =  response.data[keys][0];
            break;
          }
        }

        this.toastCtrl.create({
          message : response.data,
          position : "middle",
          duration : 2000
        }).present()

       if( response.code == 200 ){
        this.navCtrl.pop();
       }

      })
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
