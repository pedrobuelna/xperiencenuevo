import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data'
import { HomePage } from '../home/home';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataP: DataProvider) {
  }

ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
    console.log(this.dataP.dataX)
  }
  onclickCerrarsesion(){
    this.dataP.dataX = 0;
    this.navCtrl.setRoot(HomePage)
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
