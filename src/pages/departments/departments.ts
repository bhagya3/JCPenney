import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ProductlistPage } from '../productlist/productlist';
import { GetDepartments } from '../../providers/get-departments';
import { SearchItem } from "../../providers/search-item";

/*
  Generated class for the Departments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-departments',
  templateUrl: 'departments.html',
  providers: [GetDepartments, SearchItem]
})
export class DepartmentsPage {

  public departments: any;
  public searchedItem: any;
  searchFlag: boolean;
  searchTag: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public getDept: GetDepartments, public srchItem: SearchItem, public loadingController: LoadingController, public barcodeScanner: BarcodeScanner) {
    this.loadDepartment();
    this.searchFlag = true;
  }

  loadDepartment() {
    let loader = this.loadingController.create({
      content: "Please wait.."
    });
    loader.present();
    this.getDept.load()
      .then(data => {
        this.departments = data;
        loader.dismiss();
      });
  };

  deptSelectHandler(event, department) {
    this.navCtrl.push(ProductlistPage,
      {
        department: department,
        defaultUrl: department.image.url
      });
  };

  searchClickHandler(event) {
    let loader = this.loadingController.create({
      content: "Please wait.."
    });
    loader.present();
    this.srchItem.load(this.searchTag)
      .then(data => {
        this.searchedItem = data;
        loader.dismiss();
        console.log(this.searchedItem);
      });
  };

  showTextInput(event) {
    this.searchFlag == false ? this.searchFlag = true : this.searchFlag = false;
  };

  scan() {
    this.barcodeScanner.scan().then((barcodeData) => {
      //alert(barcodeData);
      //alert('Found Product');
    }, (err) => {
      console.log('error');
    });

  }






  ionViewDidLoad() {
    //console.log('ionViewDidLoad DepartmentsPage');

  }

}
