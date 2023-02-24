import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url='http://localhost:3000/Register';

  constructor(private http:HttpClient) { }

  RegisterData(data:any):Observable<any>{
    return this.http.post(this.url,data);
  }
}
