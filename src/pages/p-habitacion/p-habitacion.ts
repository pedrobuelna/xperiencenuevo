import { Component, ViewChild, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content ,ModalController} from 'ionic-angular';
import { ActividadesPage } from '../../pages/actividades/actividades';
import { HomePage } from '../home/home';
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
  @ViewChild('slides') slides: Slides;
  @ViewChild('slides2') slides2: Slides;
  @ViewChild('slides3') slides3: Slides;
  @ViewChild('slides4') slides4: Slides;
  @ViewChild('slides5') slides5: Slides;
  @ViewChild('slides6') slides6: Slides;
  @ViewChild('slides7') slides7: Slides;
  @ViewChild('slides8') slides8: Slides;
  @ViewChild(Content) content: Content;
  @ViewChild('fixed_menu') fixed_menu: any;
  @ViewChild('verificar') verificar: any;
  @ViewChild('contentID') contentID: any;
  @ViewChild('menuScrollx') menuScrollx: any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    $('.habitacion1').addClass('selected');
  }
  onclickCalendario(){
    let contactModal = this.modalCtrl.create("CalendarioPage");
    contactModal.present();
  }
  nextSlide (index) {
    if (index === 1) {
      this.slides.slideNext();
    } else if (index === 2) {
      this.slides2.slideNext();
    } else if (index === 3) {
      this.slides3.slideNext();
    } else if (index === 4) {
      this.slides4.slideNext();
    } else if (index === 5) {
      this.slides5.slideNext();
    } else if (index === 6) {
      this.slides6.slideNext();
    } else if (index === 7) {
      this.slides7.slideNext();
    } else if (index === 8) {
      this.slides8.slideNext();
    }
    
  }
  beforeSlide (index) {
    if (index === 1) {
      this.slides.slidePrev();
    } else if (index === 2) {
      this.slides2.slidePrev();
    } else if (index === 3) {
      this.slides3.slidePrev();
    } else if (index === 4) {
      this.slides4.slidePrev();
    } else if (index === 5) {
      this.slides5.slidePrev();
    } else if (index === 6) {
      this.slides6.slidePrev();
    } else if (index === 7) {
      this.slides7.slidePrev();
    } else if (index === 8) {
      this.slides8.slidePrev();
    }
  }

  goTo(habitacion) {
    this.content.scrollTo(0, $('#'+habitacion).offset().top+this.content.scrollTop+1, 500);
  }

  scrolling(event) {
    // your content here for scrolling
    if(event){
      let fixedMenu = this.fixed_menu.nativeElement;
      let verificarVAR = this.verificar.nativeElement;
      let menuScrollxVAR = this.menuScrollx.nativeElement;

      let habitacion1VAR = $('#habitacion1').offset().top+event.scrollTop-1;
      let habitacion2VAR = $('#habitacion2').offset().top+event.scrollTop-1;
      let habitacion3VAR = $('#habitacion3').offset().top+event.scrollTop-1;
      let habitacion4VAR = $('#habitacion4').offset().top+event.scrollTop-1;
      let habitacion5VAR = $('#habitacion5').offset().top+event.scrollTop-1;
      let habitacion6VAR = $('#habitacion6').offset().top+event.scrollTop-1;
      let habitacion7VAR = $('#habitacion7').offset().top+event.scrollTop-1;
      let habitacion8VAR = $('#habitacion8').offset().top+event.scrollTop-1;

      let habitacion1Menu = $('.habitacion1').offset().left+menuScrollxVAR.scrollLeft;
      let habitacion2Menu = $('.habitacion2').offset().left+menuScrollxVAR.scrollLeft-180+($('.habitacion2').width()/2);
      let habitacion3Menu = $('.habitacion3').offset().left+menuScrollxVAR.scrollLeft-180+($('.habitacion3').width()/2);
      let habitacion4Menu = $('.habitacion4').offset().left+menuScrollxVAR.scrollLeft-180+($('.habitacion4').width()/2);
      let habitacion5Menu = $('.habitacion5').offset().left+menuScrollxVAR.scrollLeft-180+($('.habitacion5').width()/2);
      let habitacion6Menu = $('.habitacion6').offset().left+menuScrollxVAR.scrollLeft-180+($('.habitacion6').width()/2);
      let habitacion7Menu = $('.habitacion7').offset().left+menuScrollxVAR.scrollLeft-180+($('.habitacion7').width()/2);
      let habitacion8Menu = $('.habitacion8').offset().left+menuScrollxVAR.scrollLeft-180+($('.habitacion8').width()/2);
      
      
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
        $(".verificar .precio").html($("#habitacion1 .precio").html())
      } else if(event.scrollTop >= habitacion2VAR && event.scrollTop < habitacion3VAR) {
        $('.habitacionLess').removeClass('selected');
        $('.habitacion2').addClass('selected');
        menuScrollxVAR.scrollTo(habitacion2Menu, 0, 0);
        $(".verificar .precio").html($("#habitacion2 .precio").html())
        console.log(habitacion2Menu);
        
      } else if(event.scrollTop >= habitacion3VAR && event.scrollTop < habitacion4VAR) {
        $('.habitacionLess').removeClass('selected');
        $('.habitacion3').addClass('selected');
        menuScrollxVAR.scrollTo(habitacion3Menu, 0, 0);
        $(".verificar .precio").html($("#habitacion3 .precio").html())
        console.log(habitacion3Menu);
      } else if(event.scrollTop >= habitacion4VAR && event.scrollTop < habitacion5VAR) {
        $('.habitacionLess').removeClass('selected');
        $('.habitacion4').addClass('selected');
        menuScrollxVAR.scrollTo(habitacion4Menu, 0, 0);
        $(".verificar .precio").html($("#habitacion4 .precio").html())
        console.log(habitacion4Menu);
      } else if(event.scrollTop >= habitacion5VAR && event.scrollTop < habitacion6VAR) {
        $('.habitacionLess').removeClass('selected');
        $('.habitacion5').addClass('selected');
        menuScrollxVAR.scrollTo(habitacion5Menu, 0, 0);
        $(".verificar .precio").html($("#habitacion5 .precio").html())
        console.log(habitacion5Menu);
      } else if(event.scrollTop >= habitacion6VAR && event.scrollTop < habitacion7VAR) {
        $('.habitacionLess').removeClass('selected');
        $('.habitacion6').addClass('selected');
        menuScrollxVAR.scrollTo(habitacion6Menu, 0, 0);
        $(".verificar .precio").html($("#habitacion6 .precio").html())
        console.log(habitacion6Menu);
      } else if(event.scrollTop >= habitacion7VAR && event.scrollTop < habitacion8VAR) {
        $('.habitacionLess').removeClass('selected');
        $('.habitacion7').addClass('selected');
        menuScrollxVAR.scrollTo(habitacion7Menu, 0, 0);
        $(".verificar .precio").html($("#habitacion7 .precio").html())
        console.log(habitacion7Menu);
      } else if(event.scrollTop >= habitacion8VAR) {
        $('.habitacionLess').removeClass('selected');
        $('.habitacion8').addClass('selected');
        menuScrollxVAR.scrollTo(habitacion8Menu, 0, 0);
        $(".verificar .precio").html($("#habitacion8 .precio").html())
        console.log(habitacion8Menu);
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
  onclickHome(){
    this.navCtrl.push(HomePage)
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
  onclickLlaves(){
    this.navCtrl.push("LlavesPage")
  }
  onclickRegistro(){
    this.navCtrl.push("RegistroPage")
  }
  onclickLogin(){
    this.navCtrl.push("LoginPage")
  }
}
