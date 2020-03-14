import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the PlayasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playas',
  templateUrl: 'playas.html',
})
export class PlayasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayasPage');
  }
  
  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Direcciones',
      //subTitle:'Que aplicacion deseas utilizar?',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Usar Apple Maps',
          //role: 'destructive',
          //icon: !this.platform.is('ios') ? "delete" : null,
          icon: !this.platform.is('ios') ? null : null,
          handler: () => {
              window.open("http://maps.apple.com/?ll=23.2653535,-106.4097012")
          }
        },
        {
          text: 'Usar Google Maps',
          //icon: !this.platform.is('ios') ? 'share' : null,
          icon: !this.platform.is('ios') ? null : null,
          handler: () => {
            window.open("https://www.google.com/maps/@?api=1&map_action=map&23.2653535,-106.4097012")
          }
        },
        {
          text: 'Usar Waze',
          //icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          icon: !this.platform.is('ios') ? null : null,
          handler: () => {            
              window.open("https://waze.com/ul?ll=23.2653535,-106.4097012")
          }
        },
        {
          text: 'VER MAPA',
          //icon: !this.platform.is('ios') ? 'heart-outline' : null,
          icon: !this.platform.is('ios') ? null : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          //icon: !this.platform.is('ios') ? 'close' : null,
          icon: !this.platform.is('ios') ? null : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
