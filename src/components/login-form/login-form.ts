import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent implements OnInit{

  @Output("onSubmit")
  private _onSubmit = new EventEmitter();

  private loginFormData:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.loginFormData = this.formBuilder.group({
      username : ["",Validators.required],
      password : ['',Validators.required]
    });
  }

  ngOnInit(){
    
  }

  onSubmit(){
    this._onSubmit.emit(this.loginFormData.value);
  }

}
