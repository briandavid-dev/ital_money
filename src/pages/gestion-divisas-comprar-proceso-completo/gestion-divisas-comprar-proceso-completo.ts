import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { PageGestionDivisas1 } from '../../pages/gestion-divisas-1/gestion-divisas-1';


@Component({
    selector: 'page-gestion-divisas-comprar-proceso-completo',
    templateUrl: 'gestion-divisas-comprar-proceso-completo.html'
})

export class PageGestionDivisasComprarProcesoCompleto {

     
    constructor(public navCtrl: NavController) {

        
        
    }




    goToPageGestionDivisas1() { 
        this.navCtrl.setRoot(PageGestionDivisas1)
    }

    

}