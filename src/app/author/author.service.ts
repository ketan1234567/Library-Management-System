import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  url='http://localhost:3000/author';

  constructor(private http:HttpClient) { }

  addAuthor(data:any){
    return this.http.post(this.url,data);

  }
}
