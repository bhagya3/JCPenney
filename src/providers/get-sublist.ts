import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

/*
  Generated class for the GetDepartments provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/



@Injectable()
export class GetSublist {

  data : any;
  selectedDepartment: any;
  selectedCategory: any;

  constructor(public http: Http) {
    this.data = null;
    //console.log('Hello GetDepartments Provider');
  }

  load(department){
    if (this.data) {
      return Promise.resolve(this.data);
    }

   return new Promise(resolve => {
      this.http.get('http://m.jcpenney.com/v4/categories/N-bwo3yD1nohp5')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.products.data;
          resolve(this.data);
        });
    });
  }
}



