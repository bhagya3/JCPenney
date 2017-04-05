import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetProductList } from '../../providers/get-product-list';
import {SublistPage} from '../sublist/sublist';


@Component({
  selector: 'page-productlist',
  templateUrl: 'productlist.html',
  providers: [GetProductList]
})
export class ProductlistPage {
  public products: any;
  department : any;
  category: any;
  defaultUrl : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public getProdList: GetProductList) { 
    this.department = navParams.get('department');
    this.defaultUrl = navParams.get('defaultUrl');
    this.loadProductList();
  }

loadProductList(){
  this.getProdList.load(this.department)
  .then(data => {

    this.products = [];
  
    for(let i = 0 ;i<data.groups.length;i++){
     
      this.products = this.products.concat(data.groups[i].categories);
    }
   
    
  });
}

 categorySelectHandler(event, product, department) {
    this.navCtrl.push(SublistPage,
      {
        department: department,
        product: product,
        defaultUrl: department.image.url
        
      });
  };
  ionViewDidLoad() {
    //console.log('ionViewDidLoad DepartmentsPage');

  }

}


