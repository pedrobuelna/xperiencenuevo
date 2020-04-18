import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';

/**
 * Generated class for the ParkingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parking',
  templateUrl: 'parking.html',
})
export class ParkingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParkingPage');
    
  }
  ionViewCanLeave() {
    return false;
  }
  onclickPedirAuto() {
    var tiempo_corriendo = null;
    const confirm = this.alertCtrl.create({
      title: 'PEDIR AUTO',
      message: '¿Seguro que desa pedir auto?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            var tiempo = {
              hora: 0,
              minuto: 1,
              segundo: 60
          };
          clearInterval(tiempo_corriendo)
          tiempo_corriendo = setInterval(function(){
            // Segundos
            if(tiempo.segundo > 0){
                document.addEventListener("backbutton",function(e) {
              }, false);
              tiempo.segundo--;
              if(tiempo.segundo==0){
                tiempo.segundo=60;
                if(tiempo.minuto >0){
                  tiempo.minuto --;
                }else{
                  tiempo.segundo=0;
                  clearInterval(tiempo_corriendo);
                  document.addEventListener("backbutton",function(e) {
                    alert("B")
                  }, true);
                }
              }
            }
            $(".cronometro .verdana2").html((tiempo.minuto < 10 ? '0' + tiempo.minuto : tiempo.minuto) + ":" + (tiempo.segundo < 10 ? '0' + tiempo.segundo : tiempo.segundo) + " Minutos");
          }, 1000);
          }
        }
      ]
    });
    confirm.present();
  }
}
