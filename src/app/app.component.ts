import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './user/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.checkLogin();
    
  }
  authError:any;
  constructor(private user:UserAuthService){

  }
  title = 'Library-Management-System';

  checkLogin(){
    this.user.invalidUserAuth.subscribe((result)=>{
      console.log(result)
      if(result){
        this.authError=result
      }
    })
  }
}
