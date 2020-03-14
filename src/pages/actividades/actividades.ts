import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Platform, ActionSheetController} from 'ionic-angular';
/**
 * Generated class for the ActividadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actividades',
  templateUrl: 'actividades.html',
})
export class ActividadesPage {
  @ViewChild(Content) content: Content;
  @ViewChild('fixed_menu') fixed_menu: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform,
    public actionsheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActividadesPage');
    $('.habitacion1').addClass('selected');
  }
  
  onclickHabitacion(){
    //this.navCtrl.setRoot("HabitacionPage",null,{direction:"forward",animate:true})
    this.navCtrl.push("HabitacionPage")
  }
  onclickRestaurant(){
    //this.navCtrl.setRoot("RestaurantPage",null,{direction:"forward",animate:true})
    this.navCtrl.push("RestaurantPage")
  }
  onclickSkybar(){
    //this.navCtrl.setRoot("SkybarPage",null,{direction:"forward",animate:true})
    this.navCtrl.push("SkybarPage")
  }
  onclickCafe(){
    //this.navCtrl.setRoot("CafePage",null,{direction:"forward",animate:true})
    this.navCtrl.push("CafePage")
  }
  onclickPlayas(){
    this.navCtrl.push("PlayasPage")
  }
  goTo(habitacion) {
    if(habitacion=="habitacion4"){
      console.log("b")
      this.content.scrollTo(0, $('#'+habitacion).offset().top+this.content.scrollTop+124, 500);
      $('.habitacionLess').removeClass('selected');
        $('.habitacion4').addClass('selected');
    }else{
      this.content.scrollTo(0, $('#'+habitacion).offset().top+this.content.scrollTop-124, 500);
    }
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
              window.open("http://maps.apple.com/?ll=23.2756941,-106.385427")
          }
        },
        {
          text: 'Usar Google Maps',
          //icon: !this.platform.is('ios') ? 'share' : null,
          icon: !this.platform.is('ios') ? null : null,
          handler: () => {
            window.open("https://www.google.com/maps/place/Estadio+Futbol+Mazatlan/@23.2756941,-106.385427,17z/data=!3m1!4b1!4m5!3m4!1s0x8698add92048b719:0xd9f8a3759d846a8!8m2!3d23.2756941!4d-106.3832383")
          }
        },
        {
          text: 'Usar Waze',
          //icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          icon: !this.platform.is('ios') ? null : null,
          handler: () => {            
              window.open("https://waze.com/ul?ll=23.2756941,-106.385427")
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
      let habitacion1VAR = $('#habitacion1').offset().top+event.scrollTop-125;
      let habitacion2VAR = $('#habitacion2').offset().top+event.scrollTop-125;
      let habitacion3VAR = $('#habitacion3').offset().top+event.scrollTop-125;
      let habitacion4VAR = $('#habitacion4').offset().top+event.scrollTop-125;
      console.log(habitacion2VAR,"a")
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
        console.log(habitacion1VAR);
      } else if(event.scrollTop >= habitacion2VAR && event.scrollTop < habitacion3VAR) {
        $('.habitacionLess').removeClass('selected');
        $('.habitacion2').addClass('selected');
        console.log(habitacion2VAR);
      } else if(event.scrollTop >= habitacion3VAR && event.scrollTop < habitacion4VAR) {
        $('.habitacionLess').removeClass('selected');
        $('.habitacion3').addClass('selected');
        console.log(habitacion3VAR);
      } else if(event.scrollTop >= habitacion4VAR) {
        $('.habitacionLess').removeClass('selected');
        $('.habitacion4').addClass('selected');
        console.log(habitacion4VAR);
      }

      
    }
    
  }
}
