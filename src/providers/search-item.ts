import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SearchItem provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SearchItem {
 data: any;
 searchUrl : any;
  constructor(public http: Http) {
    this.data = null;
  }
   load(item) {
    // if (this.data) {
    //   return Promise.resolve(this.data);
    // }
    this.searchUrl = 'http://m.jcpenney.com/v4/search?q='+item;
    alert(this.searchUrl);
    return new Promise(resolve => {
      this.http.get(this.searchUrl)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
