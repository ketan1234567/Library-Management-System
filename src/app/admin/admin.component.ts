import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user/user-auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  ngOnInit(): void {
if(!this.authError){
this.route.navigate(['/']);
}
      
  }
  authError:any;
  constructor(private user:UserAuthService,private route:Router){
  }
  checkLogin(){
    this.user.invalidUserAuth.subscribe((result)=>{
      console.log(result)
      if(result){
        this.authError=result
      }
    })
  }
  logout(){
 localStorage.removeItem('Register');
    this.route.navigate(['/']);
   // this.user.userAuthReload();

  }
}