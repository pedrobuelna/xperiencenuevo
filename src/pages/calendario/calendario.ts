import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController,ViewController} from 'ionic-angular';
import { DatepickerHelperProvider } from './../../providers/datepicker-helper/datepicker-helper';

/**
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html',
})
export class CalendarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public viewCtrl: ViewController) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarioPage');
    $('#datepicker').datepicker({
      "navTitles" : {
          //"days": 'yyyy <i>MM</i>',
          "days": 'MM',
      },
      "onSelect" : (fd, d, picker) => {
          if (!d) return;

      },
      "onChangeYear" : (year) => {
      },
      "onShow" : (fd, animationCompleted) => {

      },
      "onChangeMonth" : (month, year) => {

      },
      "prevHtml" : DatepickerHelperProvider.svgArrow,
      "nextHtml" : DatepickerHelperProvider.svgArrow,
      startDate:new Date(),
      minDate: new Date()
    });
    var d = new Date();
    console.log(d)
    var tyear = d.getFullYear(); //2020
    var tmonth = d.getMonth();  //3 
    //var tday = d.getDay(); de lunes a viernes
    var tdate = d.getDate(); 
    //var disabledDays = [0, 6];
    $('#datepicker2').datepicker({
      language: 'es',
      "navTitles" : {
          //"days": 'yyyy <i>MM</i>',
          "days": 'MM',
      },
      "onSelect" : (fd, d, picker) => {
          if (!d) return;

      },
      "onChangeYear" : (year) => {
      },
      "onShow" : (fd, animationCompleted) => {

      },
      "onChangeMonth" : (month, year) => {

      },
      "prevHtml" : DatepickerHelperProvider.svgArrow,
      "nextHtml" : DatepickerHelperProvider.svgArrow,
      startDate:new Date(tyear,tmonth,tdate+1),
      minDate: new Date(tyear,tmonth,tdate+1)
      // onRenderCell: function (date, cellType) {
      //     if (cellType == 'day') {
      //       console.log(disabledDays.indexOf(day))
      //         var day = date.getDay(),
              
      //             isDisabled = disabledDays.indexOf(day) != -1;

      //         return {
      //             disabled: isDisabled
      //         }
      //     }
      // },

    });
  }
  borrarDatePicker(){
    var myDatepicker = $('#datepicker').datepicker().data('datepicker');
    var myDatepicker2 = $('#datepicker2').datepicker().data('datepicker');
     myDatepicker.clear();
     myDatepicker2.clear();
   }
  onclickCerrarCalendario(){
    //let contactModal = this.modalCtrl.create("CalendarioPage");
    this.viewCtrl.dismiss();
  }
  onclickReservarFecha(){
    this.viewCtrl.dismiss();
    //console.log("valor datepicker1 "+$('#datepicker').val())
    //console.log("valor datepicker2 "+$('#datepicker2').val())
  }
}
