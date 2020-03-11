import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HabitacionPage } from '../habitacion/habitacion';
import { PHabitacionPage } from '../p-habitacion/p-habitacion';
import { ReservaPage } from '../reserva/reserva';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(private platform: Platform,
    public navCtrl: NavController, public navParams: NavParams) {

  }
  
  onclickPageReserva(){
    //this.navCtrl.setRoot("ReservaPage",null,{direction:"forward",animate:true})
    this.navCtrl.push(PHabitacionPage)
  }
  onclickMenuPrincipal(){
    //this.navCtrl.setRoot("MenuprincipalPage",null,{direction:"forward",animate:true})
    this.navCtrl.push("HabitacionPage")
  }
  
}
