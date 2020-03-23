// import { Component,ViewChild } from '@angular/core';
// import { IonicPage, NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import { Component, ViewChild, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Content ,ActionSheetController} from 'ionic-angular';
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
  @ViewChild(Content) content: Content;
  @ViewChild('fixed_menu') fixed_menu: any;
  //@ViewChild('verificar') verificar: any;
  @ViewChild('contentID') contentID: any;
  @ViewChild('menuScrollx') menuScrollx: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    $('.habitacion1').addClass('selected');
    console.log('ionViewDidLoad PlayasPage');
  }
  onclickMenu(){
    this.navCtrl.push("MenuprincipalPage")
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
  onclickLogin(){
    this.navCtrl.push("LoginPage")
  }
  goTo(habitacion) {
    this.content.scrollTo(0, $('#'+habitacion).offset().top+this.content.scrollTop-170, 500);
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
  scrolling(event) {
    // your content here for scrolling
    if(event){
      let fixedMenu = this.fixed_menu.nativeElement;
      //let verificarVAR = this.verificar.nativeElement;
      let menuScrollxVAR = this.menuScrollx.nativeElement;

      let habitacion1VAR = $('#habitacion1').offset().top+event.scrollTop-1;
      let habitacion2VAR = $('#habitacion2').offset().top+event.scrollTop-1;
      // let habitacion3VAR = $('#habitacion3').offset().top+event.scrollTop-1;
      // let habitacion4VAR = $('#habitacion4').offset().top+event.scrollTop-1;

      let habitacion1Menu = $('.habitacion1').offset().left+menuScrollxVAR.scrollLeft;
      let habitacion2Menu = $('.habitacion2').offset().left+menuScrollxVAR.scrollLeft-180+($('.habitacion2').width()/2);
      // let habitacion3Menu = $('.habitacion3').offset().left+menuScrollxVAR.scrollLeft-180+($('.habitacion3').width()/2);
      // let habitacion4Menu = $('.habitacion4').offset().left+menuScrollxVAR.scrollLeft-180+($('.habitacion4').width()/2);
  
      
      if(event.scrollTop > 130 && event.scrollTop <= 400){
        fixedMenu.classList.add('active')
      }else if(event.scrollTop > 400){
        fixedMenu.classList.add('activeSecond')
      }else{
        fixedMenu.classList.remove('active')
        fixedMenu.classList.remove('activeSecond')
      }

      if( (event.scrollTop >= habitacion1VAR || event.scrollTop < habitacion1VAR) && event.scrollTop < habitacion2VAR ){
        $('.habitacionLess').removeClass('selected');
        $('.habitacion1').addClass('selected');
        menuScrollxVAR.scrollTo(0, 0, 0);
      } 
      // else if(event.scrollTop >= habitacion2VAR && event.scrollTop < habitacion3VAR) {
      //   $('.habitacionLess').removeClass('selected');
      //   $('.habitacion2').addClass('selected');
      //   menuScrollxVAR.scrollTo(habitacion2Menu, 0, 0);
      //   console.log(habitacion2Menu);
      // } else if(event.scrollTop >= habitacion3VAR && event.scrollTop < habitacion4VAR) {
      //   $('.habitacionLess').removeClass('selected');
      //   $('.habitacion3').addClass('selected');
      //   menuScrollxVAR.scrollTo(habitacion3Menu, 0, 0);
      //   console.log(habitacion3Menu);
      // }
      //  else if(event.scrollTop >= habitacion4VAR && event.scrollTop < habitacion5VAR) {
      //   $('.habitacionLess').removeClass('selected');
      //   $('.habitacion4').addClass('selected');
      //   menuScrollxVAR.scrollTo(habitacion4Menu, 0, 0);
      //   console.log(habitacion4Menu);
      // } 

      // if(event.deltaY > 0){
      //   verificarVAR.classList.add('active')
      // }else{
      //   verificarVAR.classList.remove('active')
      // }
    }
    
  }

  scrollComplete(event) {
    // your content here of scroll is finished
  }
}
