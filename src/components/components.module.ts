import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register-form/register-form';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
import { CheckoutModalComponent } from './checkout-modal/checkout-modal';
@NgModule({
	declarations: [
		LoginFormComponent,
		RegisterFormComponent,
    CheckoutModalComponent
	],
	imports: [BrowserModule,IonicModule],
	exports: [
		LoginFormComponent,
		RegisterFormComponent,
    CheckoutModalComponent
	],
	bootstrap:[]
})
export class ComponentsModule {}
