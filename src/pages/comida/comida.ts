import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content ,ModalController} from 'ionic-angular';
/**
 * Generated class for the ComidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comida',
  templateUrl: 'comida.html',
})
export class ComidaPage {
  @ViewChild(Content) content: Content;
  @ViewChild('fixed_menu') fixed_menu: any;
  @ViewChild('verificar') verificar: any;
  @ViewChild('contentID') contentID: any;
  @ViewChild('menuScrollx') menuScrollx: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComidaPage');
  }
  atras(){
    this.navCtrl.pop()
  }
  onclickCompraproducto(){
    this.navCtrl.push("CompraproductoPage")
  }
  
   scrolling(event) {
    // your content here for scrolling
    if(event){
      let fixedMenu = this.fixed_menu.nativeElement;
      if(event.scrollTop > 130 && event.scrollTop <= 400){
        fixedMenu.classList.add('active')
        $(".logo2").attr("src","../../assets/imgs/logo1.png")
        $(".menu_carrusel li").attr("style","color:white;")
      }else if(event.scrollTop > 400){
        fixedMenu.classList.add('activeSecond')
      }else{
        fixedMenu.classList.remove('active')
        fixedMenu.classList.remove('activeSecond')
        $(".logo2").attr("src","../../assets/imgs/logo2.png")
        $(".menu_carrusel li").removeAttr("style")
      }

    }
  }
}
