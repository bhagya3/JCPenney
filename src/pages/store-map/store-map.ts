import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular'; 
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';

@Component({
  selector: 'page-store-map',
  templateUrl: 'store-map.html'
})
export class StoreMapPage {
    store: any;
    map: GoogleMap;
 
    constructor(public navCtrl: NavController,public navParams: NavParams, public platform: Platform) {
        this.store = navParams.get('store');
        platform.ready().then(() => {
            this.loadMap();
        });
    }
 
    loadMap(){
       // console.log(this.store);
        let location = new GoogleMapsLatLng(this.store.latitude,this.store.longitude);
 
        this.map = new GoogleMap('map', {
          'backgroundColor': 'white',
          'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'latLng': location,
            'tilt': 30,
            'zoom': 15,
            'bearing': 50
          }
        });
 
        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
            console.log('Map is ready!');
        });
 
    }
}