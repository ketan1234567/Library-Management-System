import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user/user-auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ngOnInit(): void {
    
    
  }
  authError:any;
  constructor(private user:UserAuthService){

  }

  checkLogin(){
    this.user.invalidUserAuth.subscribe((result)=>{
      console.log(result)
      if(result){
        this.authError=result
      }
    })
  }
}