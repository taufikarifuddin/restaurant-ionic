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
    CheckoutModalComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    // ModalProvider
  ]
})
export class AppModule {}
