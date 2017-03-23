import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';
// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   LatLng,
//   CameraPosition,
//   MarkerOptions,
//   Marker
// } from '@ionic-native/google-maps';
// import { GoogleMapsLatLng } from "ionic-native/dist/es5";

/*
  Generated class for the StoreMap page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-store-map',
  templateUrl: 'store-map.html'
})
export class StoreMapPage {
    map: GoogleMap;

  constructor(public navCtrl: NavController,public platform: Platform, public navParams: NavParams) { 
    platform.ready().then(() => {
      alert('Ready');
        this.loadMap();
    });
  }
 ionViewDidLoad() {
    console.log('ionViewDidLoad StoreMapPage');
    // this.loadMap();
  }
  // ngAfterViewInit() {
  //   this.loadMap();
  // }


  // loadMap() {
  //   // make sure to create following structure in your view.html file
  //   // and add a height (for example 100%) to it, else the map won't be visible
  //   // <ion-content>
  //   //  <div #map id="map" style="height:100%;"></div>
  //   // </ion-content>

  //   // create a new map by passing HTMLElement
  //   let element: HTMLElement = document.getElementById('map');

  //   let map: GoogleMap = GoogleMaps.create(element);

  //   // listen to MAP_READY event
  //   // You must wait for this event to fire before adding something to the map or modifying it in anyway
  //   map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));

  //   // create LatLng object
  //   let ionic: LatLng = new GoogleMapsLatLng(43.0741904, -89.3809802);

  //   // create CameraPosition
  //   let position: CameraPosition = {
  //     target: ionic,
  //     zoom: 18,
  //     tilt: 30
  //   };

  //   // move the map's camera to position
  //   map.moveCamera(position);

  //   // create new marker
  //   let markerOptions: MarkerOptions = {
  //     position: ionic,
  //     title: 'Ionic'
  //   };

  //   const marker: Marker = map.addMarker(markerOptions)
  //     .then((marker: Marker) => {
  //       marker.showInfoWindow();
  //     });
  // }

   loadMap()
    {
 
        let location = new GoogleMapsLatLng(-34.9290,138.6010);
 
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
