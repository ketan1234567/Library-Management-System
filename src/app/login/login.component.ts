import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from '../Material.module';
import { CustomErrorStateMatcher } from './custom-error-state-matcher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  esMatcher = new CustomErrorStateMatcher();
  constructor(private formbuilder:FormBuilder){}

  personForm = this.formbuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  
  });
  get username() {
    return this.personForm.get('username');
  }  
  get password() {
    return this.personForm.get('password');
  }  
onFormSubmit(){
}
}
