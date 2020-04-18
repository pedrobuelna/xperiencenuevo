import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App,Navbar } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { DataProvider } from '../../providers/data/data'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage{
  formgroup:FormGroup;
  correo:AbstractControl;
  contrasena:AbstractControl;
  rootPage:any = TabsPage;
  correoVal:string;
  contrasenaVal:string;
  app: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formbuilder:FormBuilder,
    public dataP: DataProvider) {
    this.formgroup = formbuilder.group({
      correo:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      contrasena:['',[Validators.required,Validators.minLength(5)]]
    });
    this.correo = this.formgroup.controls["correoVal"];
    this.contrasena = this.formgroup.controls["contrasenaVal"];  
  }
  public login: number = this.dataP.dataX;
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ionViewCanEnter(){
    console.log('ionViewCanEnter LoginPage');
    if(this.dataP.dataX == 1){
      this.navCtrl.setRoot("MenuPage");
    }else if(this.dataP.dataX == 2){
      this.navCtrl.setRoot("MenuprincipalPage")
    }
  }
  onclickMenu(){
    if(this.correoVal == "prueba1@gmail.com"){
      this.login = this.dataP.dataX = 1;
      //this.navCtrl.push("MenuprincipalPage")
      this.navCtrl.setRoot("MenuPage");
    }else if(this.correoVal == "prueba2@gmail.com"){
      this.login = this.dataP.dataX = 2;
      this.navCtrl.setRoot("MenuprincipalPage")
    }else{
      this.navCtrl.push("LoginPage")
    }
  }
  onclickActividades(){
    this.navCtrl.push("ActividadesPage")
  }
  onclickContacto(){
    this.navCtrl.push("ContactoPage")
  }
  onclickRegistro(){
    this.navCtrl.push("RegistroPage")
  }
  
}
