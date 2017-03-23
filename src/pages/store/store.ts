import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { GetStores } from '../../providers/get-stores';
import { StoreMapPage } from "../store-map/store-map";
/*
  Generated class for the Store page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
  providers: [GetStores]
})
export class StorePage {
  public stores: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public getStore: GetStores, public loadingController: LoadingController) { }

  ionViewDidLoad() {
    this.loadStores();
    console.log('ionViewDidLoad StorePage');
  }

  loadStores() {
    let loader = this.loadingController.create({
      content: "Please wait.."
    });
    loader.present();
    this.getStore.load()
      .then(data => {
        this.stores = data;
        loader.dismiss();
      });
  };
  mapViewListener($event,store){
    this.navCtrl.push(StoreMapPage,{
      store : store
    });
  };
}
