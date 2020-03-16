import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }
   // items = [
  //   'Pokémon Yellow',
  //   'Super Metroid',
  //   'Mega Man X',
  //   'The Legend of Zelda',
  //   'Pac-Man',
  //   'Super Mario World',
  //   'Street Fighter II',
  //   'Half Life',
  //   'Final Fantasy VII',
  //   'Star Fox',
  //   'Tetris',
  //   'Donkey Kong III',
  //   'GoldenEye 007',
  //   'Doom',
  //   'Fallout',
  //   'GTA',
  //   'Halo'
  // ];
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  abrirFacebook(){
    window.open("https://www.facebook.com/")
    //window.open("https://api.whatsapp.com/send?phone=6692124207")
  }
  abrirInstagram(){
    window.open("https://www.instagram.com/")
  }
  abrirTwitter(){
    window.open("https://www.twitter.com/")
  }
  callNumber(phoneNumber){
    window.open('tel:' + phoneNumber, '_system');
  }
  callNumber2(phoneNumber){
    window.open('tel:' + phoneNumber, '_system');
  }
  onclickOpenMenu(){
    this.navCtrl.push("HabitacionPage")
  }
  onclickMenu(){
    this.navCtrl.push("MenuprincipalPage")
  }
  onclickActividades(){
    this.navCtrl.push("PlayasPage")
  }
  onclickContact(){
    this.navCtrl.push("ContactoPage")
  }
  onclickLlaves(){
    this.navCtrl.push("LlavesPage")
  }
  onclickRegistro(){
    this.navCtrl.push("RegistroPage")
  }
  onclickChat(){
    this.navCtrl.push("ChatPage")
  }
}
