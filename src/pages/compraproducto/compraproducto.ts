import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CompraproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compraproducto',
  templateUrl: 'compraproducto.html',
})
export class CompraproductoPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CompraproductoPage');
  }
  atras(){
    this.navCtrl.pop()
  }
  onclickPagarproducto(){
    this.navCtrl.push("PagarproductoPage")

  }
}