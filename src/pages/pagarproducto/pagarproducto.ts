import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PagarproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagarproducto',
  templateUrl: 'pagarproducto.html',
})
export class PagarproductoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagarproductoPage');
    var numero = 
    $(".content_controls").find(".menos").click(function(){
      var numero = $(this).next().val()
      //console.log($(this).next().val(numero))
      if(numero >= 2){
        numero--;
      }
      $(this).next().val(numero)
    })
    $(".content_controls").find(".mas").click(function(){
      var numero =$(this).prev().val() 
      //console.log($(this).prev().val(numero))
      if(numero <= 9){
        numero++;
      }
      $(this).prev().val(numero)
    })
  }
  atras(){
    this.navCtrl.pop()
  }
  onclickPagarproducto(){
    this.navCtrl.push("PagoreservacionPage")
  }
}
