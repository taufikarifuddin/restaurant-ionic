import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViewController,LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SeatTableProvider } from '../../providers/seat-table/seat-table';

/**
 * Generated class for the SettingModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'setting-modal',
  templateUrl: 'setting-modal.html'
})
export class SettingModalComponent {

  private settingFormData:FormGroup;

  constructor(private formBuilder:FormBuilder,
      private viewCtrl:ViewController,
      private storage:Storage,
      private service:SeatTableProvider,
      private loadingCtrl:LoadingController,
      private toastCrrl:ToastController) { 
      

    this.settingFormData = this.formBuilder.group({
      noMeja : [0,Validators.required],
    });      

    
    storage.get('setting')
        .then(val =>{
          if( val != null && typeof val != 'undefined'){
            this.settingFormData.get('noMeja').setValue(val.noMeja);
          }
    })

  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  onSubmit(){
    this.storage.set('setting',this.settingFormData.value)
      .then(val => {
          let loading = this.loadingCtrl.create({
            content : "Changing configuraition,Please wait...."
          });

          loading.present()
          .then( value => {
            this.service.register(val.noMeja)
              .then(result => {
                let resp:any = result;
                this.toastCrrl
                .create({
                  message : resp.data,
                  position:'middle',
                  duration:1000
                }).present();   
                loading.dismiss();

                if( resp.code == 200 ){               
                  this.viewCtrl.dismiss(val);
                }else{
                  this.storage.remove('setting');
                  this.viewCtrl.dismiss(null);
                }
              })
          });                 
      });
  }

}
