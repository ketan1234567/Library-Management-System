import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from '../Material.module';
import { CustomErrorStateMatcher } from './custom-error-state-matcher';
import { UserAuthService } from '../user/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authError:any;
  esMatcher = new CustomErrorStateMatcher();
  constructor(private formbuilder:FormBuilder,private user:UserAuthService){}

  personForm = this.formbuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  get email() {
    return this.personForm.get('email');
  }  
  get password() {
    return this.personForm.get('password');
  }  
onFormSubmit(){
  const data=this.personForm.value
  this.user.userLogin(data);
  this.user.invalidUserAuth.subscribe((result)=>{
    if(result){
      this.authError=result;
    }
  })
}
}
