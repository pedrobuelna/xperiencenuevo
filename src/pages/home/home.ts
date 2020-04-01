import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, App, ViewController } from 'ionic-angular';
// import { HabitacionPage } from '../habitacion/habitacion';
// import { ReservaPage } from '../reserva/reserva';
// import { TabsPage } from '../tabs/tabs';
// import { LoginPage } from '../login/login';
import { DataProvider } from '../../providers/data/data'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(private platform: Platform,
    public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, 
    public appCtrl: App,
    public dataP: DataProvider) {
      var dataFromProvider = dataP.dataX;
      console.log(dataFromProvider)
  }
  ionViewDidLoad() {
    //$("body").find(".tabbar").addClass("none")

  }
  
  onclickPageReserva(){
    //this.navCtrl.setRoot(TabsPage,null,{direction:"forward",animate:true})
    this.navCtrl.push("PHabitacionPage")
  }
  onclickMenuPrincipal(){
    //this.navCtrl.setRoot("MenuprincipalPage",null,{direction:"forward",animate:true})
    this.navCtrl.push("HabitacionPage")
  }
  onclickLogin(){
    this.navCtrl.push("ReservacionPage")
  }
  onclickPageCalendario(){
    this.navCtrl.push("CalendarioPage")
  }
  
}
