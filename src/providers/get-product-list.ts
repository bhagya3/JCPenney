import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GetProductList {

  data: any;
  selectedDepartment: any;
  constructor(public http: Http) {
    this.data = null;
    //console.log('Hello GetDepartments Provider');
  }

  load(department) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://m.jcpenney.com/v4/categories/root')
        .map(res => res.json())
        .subscribe(data => {
          this.selectedDepartment = department;
          for (var i = 0; i < data.groups[0].categories.length; i++) {
            if (data.groups[0].categories[i].name == this.selectedDepartment.name) {
              this.data = data.groups[0].categories[i];
              break;
            }
          }
          resolve(this.data);
        });
    });
  }
}

