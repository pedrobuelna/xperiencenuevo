import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ContactoPage } from '../pages/contacto/contacto';
import { EditarinfoautoPage } from '../pages/editarinfoauto/editarinfoauto';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ActividadesPage } from '../pages/actividades/actividades';
import { LlavesPage } from '../pages/llaves/llaves';
import { ReservaPage } from '../pages/reserva/reserva';
import { PHabitacionPage } from '../pages/p-habitacion/p-habitacion';
import { HabitacionPage } from '../pages/habitacion/habitacion';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ContactoPage,
    EditarinfoautoPage,
    ActividadesPage,
    ReservaPage,
    PHabitacionPage,
    HabitacionPage,
    LlavesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ContactoPage,
    EditarinfoautoPage,
    ActividadesPage,
    ReservaPage,
    PHabitacionPage,
    HabitacionPage,
    LlavesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
