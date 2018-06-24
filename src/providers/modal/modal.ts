import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular/umd';

/*
  Generated class for the ModalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ModalProvider {

  counter:number = 0;
  modal:Loading;

  constructor(private loadingCtrl:LoadingController) {
    if( !this.modal ){
      this.modal = this.createModal();
    }
  }

  showModal(){
    if( this.counter == 0 ){
      this.modal.present();
    }

    this.increase();    
  }

  hideModal(){
    this.decrease();
    if( this.counter == 0 ){
      this.modal.dismiss();
    }
  }

  isVisible(){
    return this.counter != 0;
  }

  decrease(){
    return this.counter--;
  }

  increase(){
    return this.counter++;
  }

  createModal():Loading{
    const loader = this.loadingCtrl.create({
      content: "Please wait, Process data from server",
    });

    return loader;
  }
}
