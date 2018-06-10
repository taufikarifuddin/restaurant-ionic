import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register-form/register-form';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
import { UserFormDtoLogin } from './login-form/user.form.dto';
@NgModule({
	declarations: [
		LoginFormComponent,
		RegisterFormComponent
	],
	imports: [BrowserModule,IonicModule],
	exports: [
		LoginFormComponent,
		RegisterFormComponent
	],
	bootstrap:[]
})
export class ComponentsModule {}
