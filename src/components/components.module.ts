import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register-form/register-form';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
import { CheckoutModalComponent } from './checkout-modal/checkout-modal';
import { DetailHistoryOrderComponent } from './detail-history-order/detail-history-order';
import { ProgressModalComponent } from './progress-modal/progress-modal';
import { RejectModalComponent } from './reject-modal/reject-modal';
import { SettingModalComponent } from './setting-modal/setting-modal';
import { NotifyPayModalComponent } from './notify-pay-modal/notify-pay-modal';
@NgModule({
	declarations: [
		LoginFormComponent,
		RegisterFormComponent,
    CheckoutModalComponent,
    DetailHistoryOrderComponent,
    ProgressModalComponent,
    RejectModalComponent,
    SettingModalComponent,
    NotifyPayModalComponent
	],
	imports: [BrowserModule,IonicModule],
	exports: [
		LoginFormComponent,
		RegisterFormComponent,
    CheckoutModalComponent,
    DetailHistoryOrderComponent,
    ProgressModalComponent,
    RejectModalComponent,
    SettingModalComponent,
    NotifyPayModalComponent
	],
	bootstrap:[]
})
export class ComponentsModule {}
