import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantPage } from '../restaurant/restaurant';

/**
 * Generated class for the MenuprincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuprincipal',
  templateUrl: 'menuprincipal.html',
})
export class MenuprincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuprincipalPage');
  }
  onclickHabitacion(){
    this.navCtrl.push("HabitacionPage")
    //this.navCtrl.push("SigninPage") 
  }
  onclickResaturant(){
    this.navCtrl.push("MenuprincipalPage")
//    this.navCtrl.push("RestaurantPage")
  }
  onclickMenu(){
    this.navCtrl.push("MenuPage")
  }
  onclickActividades(){
    this.navCtrl.push("ActividadesPage")
  }
  onclickContact(){
    this.navCtrl.push("ContactoPage")
  }
  onclickLlaves(){
    this.navCtrl.push("LlavesPage")
  }
  onclickPerfil(){
    this.navCtrl.push("EditarinfoautoPage")
  }
  onclickLogin(){
    this.navCtrl.push("LoginPage")
  }

}
