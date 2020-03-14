import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { TabsPage } from '../tabs/tabs';

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
export class LoginPage {
  formgroup:FormGroup;
  correo:AbstractControl;
  contrasena:AbstractControl;
  rootPage:any = TabsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formbuilder:FormBuilder) {
    this.formgroup = formbuilder.group({
      correo:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      contrasena:['',[Validators.required,Validators.minLength(5)]]
    });
    this.correo = this.formgroup.controls["correoVal"];
    this.contrasena = this.formgroup.controls["contrasenaVal"];  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  onclickMenu(){
    this.navCtrl.push("MenuprincipalPage")
  }
}
