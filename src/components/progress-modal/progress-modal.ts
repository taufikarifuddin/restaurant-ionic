import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { StepConverterProvider } from '../../providers/step-converter/step-converter';

/**
 * Generated class for the ProgressModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progress-modal',
  templateUrl: 'progress-modal.html'
})
export class ProgressModalComponent {

  data:any;
  message:string;

  constructor(
      private navParam:NavParams,
      private viewCtrl:ViewController,
      private stepConverter:StepConverterProvider
    ) {
   this.data = this.navParam.get('data');
    this.buildMessage();
  }

  buildMessage(){
   this.message = this.stepConverter.convertToStringMessage(this.data.status);
  }

  dismiss(){
   this.viewCtrl.dismiss(false);
  }

  goToDetail(){
   this.viewCtrl.dismiss(true);
  }

}
