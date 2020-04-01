import { Component,ElementRef,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var google;
/**
 * Generated class for the ReservacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservacion',
  templateUrl: 'reservacion.html',
})
export class ReservacionPage {

  map:any;
  @ViewChild('map') mapElement: ElementRef;
  MyLng: any;
  MyLat: any;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){
    this.map = this.loadMap();
  }
  loadMap(){
    var myLatLng = {lat: 23.24674, lng: -106.4572966};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hotel'
        });
    return map;
  }
}
