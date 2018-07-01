import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
      private storage:Storage) { 
      

    this.settingFormData = this.formBuilder.group({
      noMeja : [0,Validators.required],
    });      

    
    storage.get('setting')
        .then(val =>{
          if( val != null ){
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
        this.viewCtrl.dismiss(val);
      });
  }

}
