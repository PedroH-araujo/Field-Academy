import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { LibReadComponent } from './components/lib-read/lib-read.component';
import { HttpClientModule } from '@angular/common/http'
import {MatButtonModule} from '@angular/material/button';
import { AuthorReadComponent } from './components/author-read/author-read.component';
import { CreateComponent } from './components/create-authors/create.component'
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CreateBooksComponent } from './components/create-books/create-books.component'



@NgModule({
  declarations: [
    AppComponent,
    LibReadComponent,
    AuthorReadComponent,
    CreateComponent,
    CreateBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
