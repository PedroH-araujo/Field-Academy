import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from './lib.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  baseUrl = 'http://localhost:3000/authors'

  constructor(private http: HttpClient) { }

  readAuthor(): Observable<Author[]>{
    return this.http.get<Author[]>(this.baseUrl)
  }

  createAuthor(author: Author){
    return this.http.post('http://localhost:3000/author',author)
  }

  updateAuthor(id: number,name: string){
    return this.http.put(`http://localhost:3000/author/${id}/${name}`,null)
  }

  readAuthorById(id:any): Observable<Author>{
    return this.http.get<Author>(`http://localhost:3000/author/${id}`)
  }

  deleteAuthor(id:any){
    return this.http.delete(`http://localhost:3000/author/${id}`)
  }
}
