import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotifyPayModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notify-pay-modal',
  templateUrl: 'notify-pay-modal.html'
})
export class NotifyPayModalComponent {

  data:any;

  constructor(private viewCtrl:ViewController,private navParam:NavParams) {
    this.data = navParam.get('data');
  }

  dismiss(){
    this.viewCtrl.dismiss(false);
  }

  goToDetail(){
    this.viewCtrl.dismiss(true);
  }

}
