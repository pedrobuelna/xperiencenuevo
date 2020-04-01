import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DataProvider } from '../../providers/data/data'
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataP: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuprincipalPage');
    
    console.log('ionViewDidLoad LoginPage');
    if(this.dataP.dataX == 0){
      this.navCtrl.push("LoginPage")
    }else if(this.dataP.dataX = 1){
      
    }
  }
  onclickHabitacion(){
    this.navCtrl.push("HabitacionPage")
    //this.navCtrl.push("SigninPage") 
  }
  onclickResaturant(){
    this.navCtrl.push("RestaurantPage")
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
    this.navCtrl.push("EditarinfopersonalPage")
  }
  onclickLogin(){
    this.navCtrl.push("LoginPage")
  }
  onclickSkybar(){
    this.navCtrl.push("SkybarPage")
  }
  onclickCafe(){
    this.navCtrl.push("CafePage")
  }
  onclickCerrarsesion(){
    this.dataP.dataX = 0;
    this.navCtrl.setRoot(HomePage)
  }
  

}
