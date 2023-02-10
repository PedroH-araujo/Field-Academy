import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { Component } from '@angular/core';
import { Author } from '../lib.model';
import { LibService } from '../lib.service';

@Component({
  selector: 'app-connect-author-book',
  templateUrl: './connect-author-book.component.html',
  styleUrls: ['./connect-author-book.component.css']
})
export class ConnectAuthorBookComponent {

  authors : Author[] = []
  displayedColumns: string[] = ['id', 'nome', 'book', 'action'];
  idBook: string | null = '0'

  constructor(private authorService: AuthorService, private route: ActivatedRoute,private libService: LibService, private router: Router){}

  ngOnInit(): void {
    this.authorService.readAuthor().subscribe(author => {
      this.authors = author
    })
    const id = this.route.snapshot.paramMap.get('id')
    this.idBook = id
  }

  connectAuthorBook(idA:any){
    this.libService.connectAuthorBook(idA,this.idBook).subscribe(() => {
      this.router.navigate(['/books'])
    })
  }

  disconnectBookAuthor(idA:any){
    this.libService.disconnectAuthorBook(idA,this.idBook).subscribe(() => {
      this.router.navigate(['/books'])
    })
  }
}
