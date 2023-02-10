import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Book } from '../lib.model';
import { LibService } from '../lib.service';

@Component({
  selector: 'app-connect-book-author',
  templateUrl: './connect-book-author.component.html',
  styleUrls: ['./connect-book-author.component.css']
})
export class ConnectBookAuthorComponent {
  books: Book[] = [];
  displayedColumns: string[] = ['id', 'nome', 'author', 'action'];
  idAuthor: string | null = '0'

  constructor(private libService:LibService, private router:Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.libService.readBook().subscribe(books => {
      this.books = books
    })
    const id = this.route.snapshot.paramMap.get('id')
    this.idAuthor = id
  }

  connectBookAuthor(idB:any){
    this.libService.connectAuthorBook(this.idAuthor,idB).subscribe(() => {
      this.router.navigate(['/authors'])
    })
  }

  disconnectBookAuthor(idB:any){
    this.libService.disconnectAuthorBook(this.idAuthor,idB).subscribe(() => {
      this.router.navigate(['/authors'])
    })
  }

}
