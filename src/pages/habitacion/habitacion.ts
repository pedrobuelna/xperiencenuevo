import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content } from 'ionic-angular';
// import { ParkingPage } from '../parking/parking';
// import { RestaurantPage } from '../restaurant/restaurant';
// import { SkybarPage } from '../skybar/skybar';
// import { CafePage } from '../cafe/cafe';
// import { CompartirPage } from '../compartir/compartir';
import { ActividadesPage } from '../actividades/actividades';
/**
 * Generated class for the HabitacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-habitacion',
  templateUrl: 'habitacion.html',
})
export class HabitacionPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Content) content: Content;
  @ViewChild('selected') selected: any;
  @ViewChild('selected2') selected2: any;
  @ViewChild('selected3') selected3: any;
  @ViewChild('selected4') selected4: any;
  @ViewChild('selected5') selected5: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HabitacionPage');
  }
  nextSlide () {
    this.slides.slideNext();
  }
  beforeSlide () {
    this.slides.slidePrev();
  }
  onclickRestaurant(){
    //this.navCtrl.setRoot("RestaurantPage",null,{direction:"forward",animate:true})
    this.navCtrl.push("RestaurantPage")
  }
  onclickParking(){
    this.navCtrl.push("ParkingPage")
  }
  onclickSkybar(){
    //this.navCtrl.setRoot("SkybarPage",null,{direction:"forward",animate:true})
    this.navCtrl.push("SkybarPage")
  }
  onclickCafe(){
    //this.navCtrl.setRoot("CafePage",null,{direction:"forward",animate:true})
    this.navCtrl.push("CafePage")
  }
  onclickActividades(){
    //this.navCtrl.setRoot("ActividadesPage",null,{direction:"forward",animate:true})
    this.navCtrl.push(ActividadesPage)
  }
  onclickCompartir(){
    //this.navCtrl.setRoot("CompartirPage",null,{direction:"forward",animate:true})
    this.navCtrl.push("CompartirPage")
  }
  goToSlide1() {
    this.slides.slideTo(1, 500);
  }
  goToSlide2() {
    this.slides.slideTo(2, 500);
  }
  goToSlide3() {
    this.slides.slideTo(3, 500);
  }
  goToSlide4() {
    this.slides.slideTo(4, 500);
  }
  goToSlide5() {
    this.slides.slideTo(5, 500);
  }
  slideChanged(){
    let selectedd = this.selected.nativeElement;
    let selectedd2 = this.selected2.nativeElement;
    let selectedd3 = this.selected3.nativeElement;
    let selectedd4 = this.selected4.nativeElement;
    let selectedd5 = this.selected5.nativeElement;
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    if(currentIndex==1 || currentIndex==6){
      selectedd.classList.add('selected')
      selectedd3.classList.remove('selected')
      selectedd4.classList.remove('selected')
      selectedd5.classList.remove('selected')
      selectedd2.classList.remove('selected')
    }else if(currentIndex==2){
      selectedd.classList.remove('selected')
      selectedd3.classList.remove('selected')
      selectedd4.classList.remove('selected')
      selectedd5.classList.remove('selected')
      selectedd2.classList.add('selected')
    }else if(currentIndex==3){
      selectedd.classList.remove('selected')
      selectedd2.classList.remove('selected')
      selectedd4.classList.remove('selected')
      selectedd5.classList.remove('selected')
      selectedd3.classList.add('selected')
    }else if(currentIndex==4){
      selectedd.classList.remove('selected')
      selectedd3.classList.remove('selected')
      selectedd2.classList.remove('selected')
      selectedd5.classList.remove('selected')
      selectedd4.classList.add('selected')
    }else if(currentIndex==5 || currentIndex==0){
      selectedd.classList.remove('selected')
      selectedd3.classList.remove('selected')
      selectedd2.classList.remove('selected')
      selectedd4.classList.remove('selected')
      selectedd5.classList.add('selected')
    }
  }
  onclickEditarinformacionpersonal(){
    this.navCtrl.push("EditarinfopersonalPage")
  }
}