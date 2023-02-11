import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { LibReadComponent } from './components/read-books/lib-read.component';
import { HttpClientModule } from '@angular/common/http'
import { MatButtonModule } from '@angular/material/button';
import { AuthorReadComponent } from './components/read-authors/author-read.component';
import { CreateComponent } from './components/create-authors/create.component'
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CreateBooksComponent } from './components/create-books/create-books.component'
import { MatIconModule } from '@angular/material/icon';
import { UpdateBooksComponent } from './components/update-books/update-books.component';
import { UpdateAuthorsComponent } from './components/update-authors/update-authors.component';
import { DeleteBooksComponent } from './components/delete-books/delete-books.component';
import { DeleteAuthorsComponent } from './components/delete-authors/delete-authors.component';
import { ConnectAuthorBookComponent } from './components/connect-author-book/connect-author-book.component';
import { ConnectBookAuthorComponent } from './components/connect-book-author/connect-book-author.component';
import { NavComponent } from './view/nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    LibReadComponent,
    AuthorReadComponent,
    CreateComponent,
    CreateBooksComponent,
    UpdateBooksComponent,
    UpdateAuthorsComponent,
    DeleteBooksComponent,
    DeleteAuthorsComponent,
    ConnectAuthorBookComponent,
    ConnectBookAuthorComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
