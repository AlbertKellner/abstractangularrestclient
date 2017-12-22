import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http,HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ArticlesService } from './rest/class/article.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
