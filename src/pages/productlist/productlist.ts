import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetProductList } from '../../providers/get-product-list';
// import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-productlist',
  templateUrl: 'productlist.html',
  providers: [GetProductList]
})
export class ProductlistPage {
  public products: any;
  department : any;
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
    console.log(data.groups.length);
    for(let i = 0 ;i<data.groups.length;i++){
      console.log(data.groups[i]);
      this.products = this.products.concat(data.groups[i].categories);
    }
    console.log("Hihihihi")
    console.log(this.products);
    // console.log(data);
  });
}
  ionViewDidLoad() {
    //console.log('ionViewDidLoad DepartmentsPage');

  }

}


