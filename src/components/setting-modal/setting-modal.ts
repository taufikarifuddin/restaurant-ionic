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
      noMeja : ["",Validators.required],
    });

  }

  onSubmit(data){
    this.storage.set('setting',data)
      .then(val => {
        this.viewCtrl.dismiss(data);
      });
  }

}
