import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    $.getJSON( "assets/js/demo-data/data.json", function( dataJSON ) {
      $('#flowchat').flowchat({
        dataJSON: dataJSON
      });
    });
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
  onclickLogin(){
    this.navCtrl.push("LoginPage")
  }
  onclickRegistro(){
    this.navCtrl.push("RegistroPage")
  }
}
