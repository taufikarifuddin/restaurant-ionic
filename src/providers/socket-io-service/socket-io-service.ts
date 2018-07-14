import { Injectable } from '@angular/core';
import {SOCKET_IO_HOST,SOCKET_IO_PORT} from '../api-constant/api-constant';

import * as io from 'socket.io-client';
/*
  Generated class for the SocketIoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SocketIoServiceProvider {

  socket:any;

  constructor() {
    this.socket = io(SOCKET_IO_HOST+":"+SOCKET_IO_PORT);
  }

  listen(sendBack,notify,notifyPay){
    this.socket.on(SEND_BACK_TO_USER, function(data) { 
      sendBack(data);
    });

    this.socket.on(NOTIFY_PROGRESS, function(data) { 
      notify(data);
    });
    
    this.socket.on(NOTIFY_PAY,function(data){
      notifyPay(data);
    })
  }

}

export const SEND_BACK_TO_USER = "send-back-to-user";
export const NOTIFY_PROGRESS ="notify-progress";
export const NOTIFY_PAY='notify-pay';

