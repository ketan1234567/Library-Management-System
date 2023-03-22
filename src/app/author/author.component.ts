import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from './author.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  ngOnInit(): void {
  
  }
  constructor(private services:AuthorService){}

  categoryForm=new FormGroup({
    Add_Author:new FormControl('',Validators.required)
    
  })
  onFormSubmit(){
    const data=this.categoryForm.value
    if(this.categoryForm.valid){
      this.services.addAuthor(data).subscribe((data)=>{
        console.log(data);
      });
      alertify.success("Created SuccessFully");
    }else{
      alertify.error("it is not Created");
    }
  }

}
