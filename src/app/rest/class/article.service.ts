import { Injectable } from '@angular/core';
//import {Rest} from './rest';
import {Article} from './article';
import {Page} from './page';
import {AbstractRestService} from './abstract-rest.service';
import { Observable } from 'rxjs/Rx';
import { Http,Response,RequestOptions, Headers } from '@angular/http';

@Injectable()
export class ArticlesService extends AbstractRestService<Article>{

constructor(private http: Http) {
super(http,"articles")
}
getArticles(page:number): Observable<Page> {
return super.getAll("",page);
}

getDiasbledArticles(page:number): Observable<Page> {
return super.getAll("show/disabled",page);
}

getArticle(id:number): Observable<Article> {
return super.simpleGetOne("/"+id);
}

insertArticle(article:Article){
var content = JSON.stringify({
title: article.title,
content: article.content,
user_id: article.user_id
});
return super.insert(content,"");
}


update(article:Article):Observable<Article>{
var content = JSON.stringify({
title: article.title,
content: article.content,
activated: article.activated,
user_id: article.user_id
});
return super.update(content,"",article.id);
}

}
