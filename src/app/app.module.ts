import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule.forRoot(), BrowserModule, HttpClientModule, BrowserAnimationsModule, MarkdownModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
