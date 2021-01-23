import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PageGestionDivisasComprar } from '../../pages/gestion-divisas-comprar/gestion-divisas-comprar';
import { PageGestionDivisasComprarProcesoCompleto } from '../../pages/gestion-divisas-comprar-proceso-completo/gestion-divisas-comprar-proceso-completo';


@Component({
    selector: 'page-gestion-divisas-comprar-confirmar-datos',
    templateUrl: 'gestion-divisas-comprar-confirmar-datos.html'
})

export class PageGestionDivisasComprarConfirmarDatos {

    public textDivisa: any;
     
    constructor(public navCtrl: NavController, public navParams: NavParams) {

        let param1 = navParams.get('param1');
        let param2 = navParams.get('param2');


        this.textDivisa = param1;

        console.log(param1+" "+param2)
        
    }




    goToPageGestionDivisasComprar() { 
        this.navCtrl.setRoot(PageGestionDivisasComprar)
    }
    goToPageGestionDivisasComprarProcesoCompleto() { 
        this.navCtrl.setRoot(PageGestionDivisasComprarProcesoCompleto)
    }

    

}