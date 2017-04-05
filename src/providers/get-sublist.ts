import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GetSublist {

  data : any;
  selectedDepartment: any;
  selectedCategory: any;
  hrefv:any;
  listurl: any;

  constructor(public http: Http) {
    this.data = null;
    
  }

 load(departement, category){
   

   return new Promise(resolve => {
      this.http.get(category.href)
        .map(res => res.json())
        .subscribe(data => {
           //console.log(data);
           

           if(!data.products){
             this.data = this.subLoad(data);
              
        }

          else{
          this.data = data.products.data;
          console.log(this.data);

          }
        //  console.log(this.data[1].brand);
  
       resolve(this.data);
        });
    });
  }

  subLoad(param){
    return new Promise(resolve => {
               this.listurl=param.groups[0].categories[0].href;   
                // console.log(this.listurl);
                 this.http.get(this.listurl)
                 .map(res => res.json())
                 .subscribe(data => {
                  //  console.log(data);
                    this.data = data.products.data;
                    console.log(this.data);

                     resolve(this.data);
               });
             });

  }
}



