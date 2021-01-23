import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { RegistroPage } from '../pages/registro/registro';
//import { PageGestionDivisas1 } from '../pages/gestion-divisas-1/gestion-divisas-1';
//import { PageGestionDivisasComprar } from '../pages/gestion-divisas-comprar/gestion-divisas-comprar';
//import { PageGestionDivisasComprarConfirmarDatos } from '../pages/gestion-divisas-comprar-confirmar-datos/gestion-divisas-comprar-confirmar-datos';
//import { PageGestionDivisasComprarProcesoCompleto } from '../pages/gestion-divisas-comprar-proceso-completo/gestion-divisas-comprar-proceso-completo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => { 
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


}

