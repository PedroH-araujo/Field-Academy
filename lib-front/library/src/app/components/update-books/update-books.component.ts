import { Book } from './../lib.model';
import { Component } from '@angular/core';
import { LibService } from '../lib.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent {

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

  updateBook(){
    this.LibService.updateBook(this.book.id,this.book.nome).subscribe(() => {
      this.router.navigate(['/books'])
    })
  }
}
