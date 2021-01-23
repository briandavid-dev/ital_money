import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../../pages/registro/registro';
import { PageGestionDivisas1 } from '../../pages/gestion-divisas-1/gestion-divisas-1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  goToPageRegistro() { 
    // go to the MyPage component
    //this.navCtrl.push('RegistroPage');
    this.navCtrl.push(RegistroPage)
  }
  goToPageGestionDivisas1() { 
    this.navCtrl.setRoot(PageGestionDivisas1)
  }

}
