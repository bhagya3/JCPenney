import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GetStores provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GetStores {
  data: any;
  constructor(public http: Http) {
    console.log('Hello GetStores Provider');
  }
  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://m.jcpenney.com/v4/stores/zipcode=80202')
        .map(res => res.json())
        .subscribe(data => {
          this.data= data.stores;
          console.log(this.data);
          //this.data = data.groups[0].categories;
          resolve(this.data);
        });
    });
  }
}
