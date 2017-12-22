import { Component } from '@angular/core';
import {ArticlesService} from './rest/class/article.service';
import {Page} from './rest/class/page';
import {Article} from './rest/class/article';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles:Page;
    constructor(private articleService:ArticlesService){
        this.articleService.getArticles(1).subscribe(articles=>this.setArticlePage(articles));
    }
    setArticlePage(articles:Page){
      this.articles  = articles;
    }
}
