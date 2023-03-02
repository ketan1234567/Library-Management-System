import { Component, OnInit } from '@angular/core';
import { CustomErrorStateMatcher } from '../login/custom-error-state-matcher';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  ngOnInit(): void {
    
  }
  esMatcher = new CustomErrorStateMatcher();
  categoryForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  })
  onFormSubmit(){

  }
}
