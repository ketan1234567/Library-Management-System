import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { login, signUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  data23:any;

  authError:any
  private isloggedIn: boolean = false;
  private redirectUrl: string = '/';
  private loginUrl: string = '/login';
  invalidUserAuth=new EventEmitter<boolean>(false)
  constructor(private http:HttpClient,private route:Router){}
  usersignup(user:any){
    this.http.post('http://localhost:3000/Register',user,{observe:'response'}).subscribe((result)=>{
      if(result){
        localStorage.setItem('Register',JSON.stringify(result.body));
      }
    })
  }
  userLogin(data:any){
    this.http.get<signUp[]>(`http://localhost:3000/Register?email=${data.email}&password=${data.password}`,
    {observe:'response'}
    ).subscribe((result)=>{
      if(result && result.body?.length){
        localStorage.setItem('Register',JSON.stringify(result.body[0]));
        this.route.navigate([ "admin" ]);
        this.invalidUserAuth.emit(true)
        this.isloggedIn=true;
      }else{
        this.invalidUserAuth.emit(false)
        this.isloggedIn=false;
      }
    })
  }
  userAuthReload(){
    localStorage.removeItem('Register')
    this.invalidUserAuth.emit(false)
     this.route.navigate(['/'])
    }
    isUserLoggedIn() {
      console.log(this.isloggedIn);
      
      return this.isloggedIn;
      
    }
    setRedirectUrl(url: string): void {
      this.redirectUrl = url;
    }
    getLoginUrl(): any {
      return this.loginUrl;
    
}
logoutUser(): void {
  this.isloggedIn = false;
}
}
