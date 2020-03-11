import { Component, ViewChild, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content ,ModalController} from 'ionic-angular';
import { ActividadesPage } from '../../pages/actividades/actividades';
/**
 * Generated class for the PHabitacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p-habitacion',
  templateUrl: 'p-habitacion.html',
})
export class PHabitacionPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild(Content) content: Content;
  @ViewChild('fixed_menu') fixed_menu: any;
  @ViewChild('verificar') verificar: any;
  @ViewChild('contentID') contentID: any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    $('.habitacion1').addClass('selected');
  }
  onclickCalendario(){
    let contactModal = this.modalCtrl.create("CalendarioPage");
    contactModal.present();
  }
  nextSlide () {
    this.slides.slideNext();
  }
  beforeSlide () {
    this.slides.slidePrev();
  }

  goTo(habitacion) {
    this.content.scrollTo(0, $('#'+habitacion).offset().top+this.content.scrollTop-124, 500);
  }

  scrolling(event) {
    // your content here for scrolling
    if(event){
      let fixedMenu = this.fixed_menu.nativeElement;
      let verificarVAR = this.verificar.nativeElement;
      let habitacion1VAR = $('#habitacion1').offset().top+event.scrollTop-125;
      let habitacion2VAR = $('#habitacion2').offset().top+event.scrollTop-125;
      let habitacion3VAR = $('#habitacion3').offset().top+event.scrollTop-125;
      let habitacion4VAR = $('#habitacion4').offset().top+event.scrollTop-125;
      
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
        $('.habitacion3').addClass('selected');
        console.log(habitacion4VAR);
      }

      if(event.deltaY > 0){
        verificarVAR.classList.add('active')
      }else{
        verificarVAR.classList.remove('active')
      }
    }
    
  }

  scrollComplete(event) {
    // your content here of scroll is finished
  }

  
}
