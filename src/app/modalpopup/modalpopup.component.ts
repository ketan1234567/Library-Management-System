
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManageCategoryService } from '../manage-category/manage-category.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.css']
})
export class ModalpopupComponent implements OnInit {
  constructor(private service:ManageCategoryService, @Inject(MAT_DIALOG_DATA) public data: any,
  private ref:MatDialogRef<ModalpopupComponent>){}
  ngOnInit(): void {
    this.GetAllRole();
    this.GetExistdata(this.data.id)
  }
  roledata: any;
  editdata: any;
  savedata: any;
  SaveUser(){
    if (this.updateform.valid) {
      this.editdata.id = this.updateform.getRawValue().id
      this.editdata.category = this.updateform.getRawValue().category
      this.editdata.status = this.updateform.getRawValue().status

      this.service.UpdateData(this.editdata).subscribe(item => {

        this.savedata = item;
        this.GetAllRole();
        //console.log(this.updateform.getRawValue());
        this.savedata = item;
        if (this.savedata = item) {
       
          alertify.success("This is SuccessFully Updated");
          
          this.ref.close();
          
        } else {
          alertify.error("please Try again");
        }
      });
    }
  }
  updateform = new FormGroup({
    id: new FormControl(),
    category: new FormControl("", Validators.required),
    status: new FormControl("", Validators.required)
  });
  GetAllRole(){
    this.service.getRole().subscribe((result)=>{
      this.roledata=result;
      console.log(result);
    })

  }
  GetExistdata(id:any){
    this.service.GetUserById(id).subscribe((result)=>{
      console.log(result);
      this.editdata=result
      if(this.editdata!=null){
        this.updateform.setValue({id:this.editdata.id, category:this.editdata.category,status:this.editdata.status});
      }
      
    })

  }


}
