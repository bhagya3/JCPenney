import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GetProdDescription {

  data : any;
  productUrl : any;


  constructor(public http: Http) {
    this.data = null;
    
  }

 load(product){
   

   return new Promise(resolve => {
      this.productUrl = product;
      console.log(this.productUrl);
      
      this.http.get(this.productUrl)
        .map(res => res.json())
        .subscribe(data => {
          //console.log(this.data);

          this.data = data;
          //console.log(data);
          resolve(this.data);
     
        });
    });
  }
}

