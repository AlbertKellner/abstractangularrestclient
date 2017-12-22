import { Observable } from 'rxjs/Rx';
import { Http,Response,RequestOptions, Headers } from '@angular/http';

import {Page} from './page';

export class RestResponse{
status:boolean;
}

export abstract class AbstractRestService<T> {
baseUri="http://192.168.10.10/api/v1";
constructor(protected _http: Http, protected url:string){
this.baseUri += "/"+url;
}
simpleGetOne(url:string):Observable<T>{
url = this.baseUri +"/"+ url;
console.log(url);
return this._http.get(url,{headers:this.generateHeaders()})
.map((res: Response) => res.json())
.catch((error: any) => Observable.throw(error));
}

getAll(url:string,page:number):Observable<Page> {
 url = this.baseUri +"/"+url+"?page="+page;
 console.log(url);
 return this._http.get(url,{
 headers: this.generateHeaders()
 })
 .map((res: Response) => res.json())
 .catch((error: any) => Observable.throw(error));
 }

update(content:any,url:string,id:number):Observable<T>{
url = this.baseUri + url+"/"+id;
return this._http.put(url, content, {
headers: this.generateHeaders()
})
.map((res: Response) => res.json())
.catch((error: any) => Observable.throw(error));
}

insert(content:any,url:string):Observable<T>{
url = this.baseUri + url;
console.log(url);
return this._http.post(url, content, {
headers: this.generateHeaders()
}).map((res: Response) => res.json())
.catch((error: any) => Observable.throw(error));
}
generateHeaders():Headers{
let headers = new Headers({ 'Accept': 'application/json' });
headers.append('Content-Type', 'application/json');
headers.append('Authorization', `Bearer `+localStorage.token);
return headers;
}

}
