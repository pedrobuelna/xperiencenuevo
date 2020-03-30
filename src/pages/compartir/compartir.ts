import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
/**
 * Generated class for the CompartirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compartir',
  templateUrl: 'compartir.html',
})
export class CompartirPage {
   formgroup:FormGroup;
   name:AbstractControl;
   apellidos:AbstractControl;
   ciudad:AbstractControl;

  public nameVal: string = 'Barbie';
  public apellidosVal: string = 'Martinez Rojas';
  public ciudadVal: string = 'Zapopan, MX.';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formbuilder:FormBuilder) {
     this.formgroup = formbuilder.group({
      //email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      name:['',[Validators.required,Validators.minLength(5)]],
      apellidos:['',[Validators.required,Validators.minLength(5)]],
      ciudad:['',[Validators.required,Validators.minLength(5)]]
    });
    this.name = this.formgroup.controls["name"];
    this.apellidos = this.formgroup.controls["apellidos"];
    this.ciudad = this.formgroup.controls["ciudad"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompartirPage');
    $(".field  > img:nth-child(1)").click(function(){
      $(".field  > img").attr("src","../../assets/imgs/estrelladesactivada.png")
      $(this).attr("src","../../assets/imgs/estrellaactiva.png")
    })
    $(".field  > img:nth-child(2)").click(function(){
      $(".field  > img").attr("src","../../assets/imgs/estrelladesactivada.png")
      $(".field  > img:nth-child(1),.field  > img:nth-child(2)").attr("src","../../assets/imgs/estrellaactiva.png")
    })
    $(".field  > img:nth-child(3)").click(function(){
      $(".field  > img").attr("src","../../assets/imgs/estrelladesactivada.png")
      $(".field  > img:nth-child(1),.field  > img:nth-child(2),.field  > img:nth-child(3)").attr("src","../../assets/imgs/estrellaactiva.png")
    })
    $(".field  > img:nth-child(4)").click(function(){
      $(".field  > img").attr("src","../../assets/imgs/estrelladesactivada.png")
      $(".field  > img:nth-child(1),.field  > img:nth-child(2),.field  > img:nth-child(3),.field  > img:nth-child(4)").attr("src","../../assets/imgs/estrellaactiva.png")
    })
    $(".field  > img:nth-child(5)").click(function(){
      $(".field  > img").attr("src","../../assets/imgs/estrelladesactivada.png")
      $(".field  > img:nth-child(1),.field  > img:nth-child(2),.field  > img:nth-child(3),.field  > img:nth-child(4),.field  > img:nth-child(5)").attr("src","../../assets/imgs/estrellaactiva.png")
    })
  }

}
