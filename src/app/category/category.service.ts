import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url="http://localhost:3000/category";
  constructor(private http:HttpClient) { }

  AddCategory(data:any):Observable<any>{
    return this.http.post(this.url,data);
  }
}
