import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { UserFormDtoLogin } from '../../components/login-form/user.form.dto';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private formData:UserFormDtoLogin;

  constructor(private navCtrl: NavController,
      private loadingCtrl:LoadingController ) {

    this.formData = new UserFormDtoLogin();

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
