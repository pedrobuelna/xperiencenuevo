import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActividadesPage } from '../actividades/actividades';
/**
 * Generated class for the SkybarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skybar',
  templateUrl: 'skybar.html',
})
export class SkybarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkybarPage');
  }
  onclickHabitacion(){
    //this.navCtrl.setRoot("HabitacionPage",null,{direction:"forward",animate:true})
    this.navCtrl.push("HabitacionPage")
  }
  onclickRestaurant(){
    //this.navCtrl.setRoot("RestaurantPage",null,{direction:"forward",animate:true})
    this.navCtrl.push("RestaurantPage")
  }
  onclickCafe(){
    //this.navCtrl.setRoot("ParkingPage",null,{direction:"forward",animate:true})
    this.navCtrl.push("CafePage")
  }
  onclickActividades(){
    //this.navCtrl.setRoot("ActividadesPage",null,{direction:"forward",animate:true})
    this.navCtrl.push(ActividadesPage)
  }
}
