import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PageGestionDivisasComprar } from '../../pages/gestion-divisas-comprar/gestion-divisas-comprar';
import { PageMenuPopover1 } from '../menu-popover-1/menu-popover-1';


@Component({
    selector: 'page-gestion-divisas-1',
    templateUrl: 'gestion-divisas-1.html'
})

export class PageGestionDivisas1 {

    public itemsList = [
        {
            "contrato":"Compra de divisas", 
            "fecha":"Liquidada", 
            "estatus":"001" //liquidado
        },
        {
            "contrato":"Compra de divisas", 
            "fecha":"10-01-19", 
            "estatus":"002" //en espera
        }
    ];
    
     
    constructor(
        public navCtrl: NavController,
        public popoverCtrl: PopoverController
    ) {

        
        
    }




    goToPageGestionDivisasComprar() { 
        this.navCtrl.push(PageGestionDivisasComprar)
    }


    openMenuOptions() {
        
        let popover = this.popoverCtrl.create(PageMenuPopover1)

        popover.present({
            ev: event
        });

    }

    

}