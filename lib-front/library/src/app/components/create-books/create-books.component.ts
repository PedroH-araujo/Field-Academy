import { Router } from '@angular/router';
import { LibReadComponent } from '../read-books/lib-read.component';
import { Component } from '@angular/core';
import { Book } from '../lib.model';
import { LibService } from '../lib.service';


@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent {

  book: Book = {
    id: 0,
    nome: '',
    author: ''
  }

  constructor(private libService: LibService, private router: Router){}


  createBooks(){
    this.libService.createBook(this.book).subscribe(() => {
      alert('Livro Criado')
      this.router.navigate(['/books'])
    })
  }

}
