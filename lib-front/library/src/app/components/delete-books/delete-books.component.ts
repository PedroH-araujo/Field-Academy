import { ActivatedRoute, Router } from '@angular/router';
import { LibService } from './../lib.service';
import { Component } from '@angular/core';
import { Book } from '../lib.model';

@Component({
  selector: 'app-delete-books',
  templateUrl: './delete-books.component.html',
  styleUrls: ['./delete-books.component.css']
})
export class DeleteBooksComponent {

  constructor(private LibService: LibService, private route:ActivatedRoute, private router:Router){}

  book: Book = {
    id: 0,
    nome: '',
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.LibService.readBookById(id).subscribe(book => {
      this.book = book
    })
  }

  deleteBook(): void {
    this.LibService.deleteBook(this.book.id).subscribe(() => {
      this.router.navigate(['/books'])
    })
  }

}
