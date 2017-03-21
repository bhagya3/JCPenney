import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GetSublist {

  data : any;
  selectedDepartment: any;
  selectedCategory: any;
  hrefv:any;

  constructor(public http: Http) {
    this.data = null;
    
  }

 load(departement, category){
   

   return new Promise(resolve => {
      this.http.get(category.href)
        .map(res => res.json())
        .subscribe(data => {

          this.data = data.products.data;
          //console.log(data);
          resolve(this.data);
     
        });
    });
  }
}



