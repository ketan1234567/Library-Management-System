import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { login, signUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

 
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
        this.route.navigate(['admin']);
        this.invalidUserAuth.emit(true)
      }else{
        this.invalidUserAuth.emit(false)
      }
    })
  }
  userAuthReload(){
    localStorage.removeItem('Register')
    this.invalidUserAuth.emit(false)
     this.route.navigate(['/'])
    }
}
