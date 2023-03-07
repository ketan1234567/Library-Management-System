import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageCategoryService {

  constructor(private http:HttpClient) { }
  url='http://localhost:3000/category';

  getData():Observable<any>{
    return this.http.get<any>(this.url);
  }
  deleteData(id:any){
    return this.http.delete(this.url+"/"+id)
  }
  getRole():Observable<any>{
    return this.http.get<any>(this.url);
  }
  GetUserById(id:any){
    return this.http.get(this.url+"/"+id)
  }
  UpdateData(data:any){
    return this.http.put(this.url+"/"+data.id,data)
  }
}
 