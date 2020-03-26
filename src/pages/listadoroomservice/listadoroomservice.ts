import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content ,ModalController} from 'ionic-angular';

/**
 * Generated class for the ListadoroomservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listadoroomservice',
  templateUrl: 'listadoroomservice.html',
})
export class ListadoroomservicePage {
  @ViewChild(Content) content: Content;
  @ViewChild('fixed_menu') fixed_menu: any;
  @ViewChild('verificar') verificar: any;
  @ViewChild('contentID') contentID: any;
  @ViewChild('menuScrollx') menuScrollx: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoroomservicePage');
  }
  onclickComida(){
    this.navCtrl.push("ComidaPage")
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
      } else if(event.scrollTop >= habitacion2VAR && event.scrollTop < habitacion3VAR) {
        $('.habitacionLess').removeClass('selected');
        $('.habitacion2').addClass('selected');
        menuScrollxVAR.scrollTo(habitacion2Menu, 0, 0);
        console.log(habitacion2Menu);
      } else if(event.scrollTop >= habitacion3VAR && event.scrollTop < habitacion4VAR) {
        $('.habitacionLess').removeClass('selected');
        $('.habitacion3').addClass('selected');
        menuScrollxVAR.scrollTo(habitacion3Menu, 0, 0);
        console.log(habitacion3Menu);
      } else if(event.scrollTop >= habitacion4VAR && event.scrollTop < habitacion5VAR) {
        $('.habitacionLess').removeClass('selected');
        $('.habitacion4').addClass('selected');
        menuScrollxVAR.scrollTo(habitacion4Menu, 0, 0);
        console.log(habitacion4Menu);
      } else if(event.scrollTop >= habitacion5VAR && event.scrollTop < habitacion6VAR) {
        $('.habitacionLess').removeClass('selected');
        $('.habitacion5').addClass('selected');
        menuScrollxVAR.scrollTo(habitacion5Menu, 0, 0);
        console.log(habitacion5Menu);
      } else if(event.scrollTop >= habitacion6VAR && event.scrollTop < habitacion7VAR) {
        $('.habitacionLess').removeClass('selected');
        $('.habitacion6').addClass('selected');
        menuScrollxVAR.scrollTo(habitacion6Menu, 0, 0);
        console.log(habitacion6Menu);
      } else if(event.scrollTop >= habitacion7VAR && event.scrollTop < habitacion8VAR) {
        $('.habitacionLess').removeClass('selected');
        $('.habitacion7').addClass('selected');
        menuScrollxVAR.scrollTo(habitacion7Menu, 0, 0);
        console.log(habitacion7Menu);
      } else if(event.scrollTop >= habitacion8VAR) {
        $('.habitacionLess').removeClass('selected');
        $('.habitacion8').addClass('selected');
        menuScrollxVAR.scrollTo(habitacion8Menu, 0, 0);
        console.log(habitacion8Menu);
      }

      if(event.deltaY > 0){
        verificarVAR.classList.add('active')
      }else{
        verificarVAR.classList.remove('active')
      }
    }
  }
}
