import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetDepartments } from '../../providers/get-departments';
/*
  Generated class for the Departments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-departments',
  templateUrl: 'departments.html',
  providers: [GetDepartments]
})
export class DepartmentsPage {
  public departments: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public getDept: GetDepartments) { 
    this.loadDepartment();
  }

loadDepartment(){
  this.getDept.load()
  .then(data => {
    this.departments = data;
    //console.log(data);
  });
}
  ionViewDidLoad() {
    //console.log('ionViewDidLoad DepartmentsPage');
  }

}
