import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { LibReadComponent } from './components/lib-read/lib-read.component';
import { HttpClientModule } from '@angular/common/http'
import {MatButtonModule} from '@angular/material/button';
import { AuthorReadComponent } from './components/author-read/author-read.component'


@NgModule({
  declarations: [
    AppComponent,
    LibReadComponent,
    AuthorReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
