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
}
