import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the LlavesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-llaves',
  templateUrl: 'llaves.html',
})
export class LlavesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LlavesPage');
  }
  onclickAdicional(){

  }
  onclickAbrir() {
  
    const confirm = this.alertCtrl.create({
      title: 'Abrir Habitacion',
      message: 'Seguro que deseas abrir la habitacion',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelado click');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Aceptado click');
            $("#tabpanel-t0-3 > page-llaves > ion-content > div.scroll-content > div > div:nth-child(1) > button > span").html("Abre habitacion")
          }
        }
      ]
    });
    confirm.present();
  }
}
