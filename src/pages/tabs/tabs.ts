import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ContactoPage } from '../contacto/contacto';
import { EditarinfoautoPage } from '../editarinfoauto/editarinfoauto';
import { ActividadesPage } from '../actividades/actividades';
import { LlavesPage } from '../llaves/llaves';
import { ReservaPage } from '../reserva/reserva';
import { HabitacionPage } from '../habitacion/habitacion';
import { PHabitacionPage } from '../p-habitacion/p-habitacion';
import { LoginPage } from '../login/login';
//import { PlayasPage } from '../playas/playas';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = PHabitacionPage;
  tab2Root = ActividadesPage;
  tab3Root = ContactPage;
  tab4Root = LlavesPage;
  tab5Root = EditarinfoautoPage;
  tab6Root = LoginPage;
  constructor() {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad tabs');
  }
}
