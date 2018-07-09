import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the RejectModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'reject-modal',
  templateUrl: 'reject-modal.html'
})
export class RejectModalComponent {

  datas:any;

  constructor(private navParam : NavParams,
    private viewCtrl:ViewController) {
      this.datas = this.navParam.get('data');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
