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
    this.navCtrl.setRoot("HabitacionPage",null,{direction:"forward",animate:true})
    //this.navCtrl.push("SigninPage") 
  }
  onclickResaturant(){
    this.navCtrl.setRoot("MenuprincipalPage",null,{direction:"forward",animate:true})
//    this.navCtrl.push("RestaurantPage")
  }

}
