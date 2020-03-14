import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad() {

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
    //window.open("https://www.facebook.com/")
    window.open("https://api.whatsapp.com/send?phone=6692124207")
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
}
