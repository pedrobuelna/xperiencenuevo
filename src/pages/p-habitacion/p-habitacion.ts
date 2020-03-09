import { Component, ViewChild, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content } from 'ionic-angular';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

  nextSlide () {
    this.slides.slideNext();
  }
  beforeSlide () {
    this.slides.slidePrev();
  }

  scrolling(event) {
    // your content here for scrolling
    let fixedMenu = this.fixed_menu.nativeElement;
    let verificarVAR = this.verificar.nativeElement;
    
    if(event.scrollTop > 130 && event.scrollTop <= 400){
      fixedMenu.classList.add('active')
    }else if(event.scrollTop > 400){
      fixedMenu.classList.add('activeSecond')
    }else{
      fixedMenu.classList.remove('active')
      fixedMenu.classList.remove('activeSecond')
    }

    if(event.deltaY > 0){
      console.log(event);
      console.log(fixedMenu);
      verificarVAR.classList.add('active')
    }else{
      verificarVAR.classList.remove('active')
    }
  }

  scrollComplete(event) {
    // your content here of scroll is finished
  }

  
}
