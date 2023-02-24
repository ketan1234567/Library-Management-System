import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomErrorStateMatcher } from '../login/custom-error-state-matcher';
import { RegisterService } from './register.service';
import * as alertify from 'alertifyjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  respdata:any;
  ngOnInit(): void {
   this.onFormSubmit()
  }

  esMatcher = new CustomErrorStateMatcher();
  constructor(private formbuilder:FormBuilder,private serveice:RegisterService,private router:Router){}

  RegisterFrom = this.formbuilder.group({
    full_name: ['', Validators.required],
    mobile_number: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    cpassword: ['', Validators.required],
  
  });
  get full_name() {
    return this.RegisterFrom.get('full_name');
  }  
  get mobile_number() {
    return this.RegisterFrom.get('mobile_number');
  } 
  get email() {
    return this.RegisterFrom.get('email');
  }  
  get password() {
    return this.RegisterFrom.get('password');
  } 
  get cpassword() {
    return this.RegisterFrom.get('cpassword');
  } 
  onFormSubmit(){
    if(this.RegisterFrom.valid){
      this.serveice.RegisterData(this.RegisterFrom.value)?.subscribe(item=>{
        this.respdata=item;
        if(this.respdata=item){
          localStorage.setItem('signup',JSON.stringify(this.respdata))
          alertify.success("Registration SuccessFully");
          this.router.navigate(['login']);
        }else{
          alertify.error("Please Try Again ");
        }
    
      });

    }

  }
  }




