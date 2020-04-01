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
  onclickPagoreservacion(){
    this.navCtrl.push("PasosreservacionPage")
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PagarproductoPage');
    var total = $(".totalInput").val();
    var total2 = $(".totalInput2").val();
    var total3 = 0;
    $(".content_controls").find(".menos").click(function(){
      var numero = $(this).next().val()
      console.log(numero)
      if(numero >= 2){
        numero--;
        setTimeout(function(){
          total3 = ($("#numero1").val() *  total) + ($("#numero2").val() *  total2)
          $(".precio.black").html("$"+total3.toFixed(2));  
        },100)
      }
      $(this).next().val(numero)
    })
    $(".content_controls").find(".mas").click(function(){
      var numero =$(this).prev().val()
      if(numero <= 9){
        numero++;
        setTimeout(function(){
          total3 = ($("#numero1").val() *  total) + ($("#numero2").val() *  total2)
          $(".precio.black").html("$"+total3.toFixed(2));
        },100)
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
