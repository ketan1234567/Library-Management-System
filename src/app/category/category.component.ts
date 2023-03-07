import { Component, OnInit } from '@angular/core';
import { CustomErrorStateMatcher } from '../login/custom-error-state-matcher';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from './category.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private service:CategoryService){}
  esMatcher = new CustomErrorStateMatcher();
  categoryForm=new FormGroup({
    category:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required),
  })
  onFormSubmit(){
const data=this.categoryForm.value;
if(this.categoryForm.valid){
  this.service.AddCategory(data).subscribe((data)=>{
    console.log(data);
    
  });
  alertify.success("Created SuccessFully");
}else{
  alertify.error("it is not Created");
}

    

  }
}
