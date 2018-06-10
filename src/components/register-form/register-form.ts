import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  registerFormData:FormGroup;

  @Output("onSubmit")
  _onSubmit = new EventEmitter();

  constructor(private formBuilder:FormBuilder) {
    this.registerFormData =  this.formBuilder.group({
      username : ['',Validators.required],
      name : ['',Validators.required],
      email : ['',Validators.compose([
        Validators.required,
        Validators.pattern("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})")
      ])],      
      password : ['',Validators.required],
      repassword :['',Validators.required],
    });
  }

  onSubmit(){
    this._onSubmit.emit(this.registerFormData.value);
  }

}
