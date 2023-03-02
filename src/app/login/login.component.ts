import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from '../Material.module';
import { CustomErrorStateMatcher } from './custom-error-state-matcher';
import { UserAuthService } from '../user/user-auth.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error:string="";
  checkdata:any;
  esMatcher = new CustomErrorStateMatcher();
  constructor(private formbuilder:FormBuilder,private user:UserAuthService){}

  personForm = this.formbuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
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
  if(this.personForm.valid){
    this.user.invalidUserAuth.subscribe((result)=>{
      if(result===true){
        alertify.success("Login SuccessFully");
        console.log(result);
        this.checkdata=result;
        this.error="Submitted Successfully";
      }else{
        alertify.error("Incorrect Username and password ");
        this.error="Incorrect Username and password"
      }
    })
  }

}
}
