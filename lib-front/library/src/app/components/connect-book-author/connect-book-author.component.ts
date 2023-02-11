import { AuthorService } from './../author.service';
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
  nameAuthor: string = ''

  constructor(private libService:LibService, private router:Router, private route: ActivatedRoute, private authorService: AuthorService){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.idAuthor = id

    this.authorService.readAuthorById(id).subscribe(author => {
      this.nameAuthor = author.nome
      console.log(this.nameAuthor)
    })
    this.libService.readBook().subscribe(books => {
      let res = (books.filter(element => {
        const isRemoveRelation = this.route.snapshot.queryParamMap.get('remove-relation')
        if(isRemoveRelation) {
          return element.author == this.nameAuthor && element.author
        }
        return element
      }))
      this.books = res
    })
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
