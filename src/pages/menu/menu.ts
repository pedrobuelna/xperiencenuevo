import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
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
    this.navCtrl.push("EditarinfopersonalPage")
  }
  onclickLogin(){
    this.navCtrl.push("LoginPage")
  }
  onclickCompartir(){
    this.navCtrl.push("CompartirPage")
  }
}
