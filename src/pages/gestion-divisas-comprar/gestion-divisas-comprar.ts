import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PageGestionDivisasComprarConfirmarDatos } from '../../pages/gestion-divisas-comprar-confirmar-datos/gestion-divisas-comprar-confirmar-datos';


@Component({
    selector: 'page-gestion-divisas-comprar',
    templateUrl: 'gestion-divisas-comprar.html'
})

export class PageGestionDivisasComprar {

    public selectDivisa: string;
    public selectInstrumento: string;
     
    constructor(public navCtrl: NavController) {
        
        
    }




    goToPageGestionDivisasComprarConfirmarDatos() { 

        var params = {
            param1 : this.selectDivisa,
            param2 : this.selectInstrumento,
        }

        this.navCtrl.push(PageGestionDivisasComprarConfirmarDatos,params)
        //this.navCtrl.setRoot(PageGestionDivisasComprarConfirmarDatos,params)
    }

    

}