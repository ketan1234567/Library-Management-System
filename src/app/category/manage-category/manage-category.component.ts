import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ManageCategoryService } from 'src/app/manage-category/manage-category.service';
import * as alertify from 'alertifyjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalpopupComponent } from 'src/app/modalpopup/modalpopup.component';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {
  constructor(private service:ManageCategoryService,private dialog:MatDialog){}
  dataSource: MatTableDataSource<any>= new MatTableDataSource();
  @ViewChild(MatTable) table: MatTable<any> | undefined;
  ani:any;
  ELEMENT_DATA:any
  displayedColumns: Array<string> = [];
  
  ngOnInit(): void {
    this.GetAllData()
    this.displayedColumns=['id', 'category', 'status','Actions'];
      this.dataSource = (<any>this.service.getData()).GetAllContactData;
      console.log(this.dataSource);
   
  }
  GetAllData(){
    this.service.getData().subscribe(data=>{
      this.ani=data;
      console.log(data)
     // this.dataSource=data;
      this.dataSource = new MatTableDataSource(data);
      ///this.dataSource = new MatTableDataSource<User[]>(this.ani);
      this.ELEMENT_DATA = new MatTableDataSource(data);
    }) 
  }
  FunctionDelete(id:any){
    alertify.confirm("Remove user", "do you wnat to remove this user?", () => {
      this.service.deleteData(id).subscribe(item => {
        this.GetAllData();
        alertify.success("Removed SuccessFully");
      });

    }, function () { });
  }
  UpdateData(id:any){
    let popup=this.dialog.open(ModalpopupComponent,{
    
      width: '400px',
      //  height:'300px',
      exitAnimationDuration: '500ms',
      enterAnimationDuration: '500ms',
      data: {
        id: id
      }
  })
  popup.afterClosed().subscribe(item => {
    this.GetAllData();
  });

}
}





