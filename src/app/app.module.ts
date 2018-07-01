import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage'; 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ComponentsModule } from '../components/components.module';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { CheckoutModalComponent } from '../components/checkout-modal/checkout-modal';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { DetailHistoryOrderComponent } from '../components/detail-history-order/detail-history-order';
import { UserServiceProvider } from '../providers/user-service/user-service'; 
import { HttpClientModule } from '@angular/common/http';
import { OrderServiceProvider } from '../providers/order-service/order-service';
import { ItemServiceProvider } from '../providers/item-service/item-service';
import { SocketIoServiceProvider } from '../providers/socket-io-service/socket-io-service';
import { StepConverterProvider } from '../providers/step-converter/step-converter';
import { ProgressModalComponent } from '../components/progress-modal/progress-modal';
import { RejectModalComponent } from '../components/reject-modal/reject-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    OrderHistoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ComponentsModule,
    IonicStorageModule.forRoot({
      name : '_restoDb',
      driverOrder : ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    OrderHistoryPage,    
    DetailHistoryOrderComponent,
    CheckoutModalComponent,
    ProgressModalComponent,
    RejectModalComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    OrderServiceProvider,
    ItemServiceProvider,
    SocketIoServiceProvider,
    StepConverterProvider,
    // ModalProvider
  ]
})
export class AppModule {}
