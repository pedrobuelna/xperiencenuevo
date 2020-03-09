import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParkingPage } from '../parking/parking';
import { RestaurantPage } from '../restaurant/restaurant';
import { SkybarPage } from '../skybar/skybar';
import { CafePage } from '../cafe/cafe';
import { CompartirPage } from '../compartir/compartir';
import { ActividadesPage } from '../actividades/actividades';
/**
 * Generated class for the HabitacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-habitacion',
  templateUrl: 'habitacion.html',
})
export class HabitacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HabitacionPage');
  }
  onclickRestaurant(){
    //this.navCtrl.setRoot("RestaurantPage",null,{direction:"forward",animate:true})
    this.navCtrl.push("RestaurantPage")
  }
  onclickParking(){
    this.navCtrl.push("ParkingPage")
  }
  onclickSkybar(){
    //this.navCtrl.setRoot("SkybarPage",null,{direction:"forward",animate:true})
    this.navCtrl.push("SkybarPage")
  }
  onclickCafe(){
    //this.navCtrl.setRoot("CafePage",null,{direction:"forward",animate:true})
    this.navCtrl.push("CafePage")
  }
  onclickActividades(){
    //this.navCtrl.setRoot("ActividadesPage",null,{direction:"forward",animate:true})
    this.navCtrl.push(ActividadesPage)
  }
  onclickCompartir(){
    //this.navCtrl.setRoot("CompartirPage",null,{direction:"forward",animate:true})
    this.navCtrl.push("CompartirPage")
  }
}