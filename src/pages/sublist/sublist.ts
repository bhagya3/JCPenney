import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetSublist } from '../../providers/get-sublist';
import {ProductDescPage} from '../product-desc/product-desc';


/*
  Generated class for the Sublist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-sublist',
  templateUrl: 'sublist.html',

  providers: [GetSublist]
})
export class SublistPage {
  public subproducts: any;
  department : any;
  defaultUrl : any;
  product: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public getList: GetSublist) { 
    //console.log(navParams)
    this.department = navParams.get('department');
     console.log(this.department);
    this.product= navParams.get('product');
    //console.log(this.product);
    this.defaultUrl = this.department.image.url;
    console.log(this.defaultUrl);
    this.loadsublist();
  }


loadsublist(){
  //console.log(this.product);

  this.getList.load(this.department, this.product)

  .then(data => {
    
   this.subproducts = data;
    //console.log(data);
  });
}

productDetailHandler(event, subproduct) {
  //alert(subproduct);
    this.navCtrl.push(ProductDescPage,
      {
        
        subproduct: subproduct.url
        
      });
  };

ionViewDidLoad() {
    //console.log('ionViewDidLoad DepartmentsPage');

  }

}








