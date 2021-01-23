import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroConfirmacionPage } from '../../pages/registro-confirmacion/registro-confirmacion';

@Component({
    selector: 'page-registro',
    templateUrl: 'registro.html'
})

export class RegistroPage {
    
    constructor(public navCtrl: NavController) {

    }


    goToPageRegistroConfirmacion() { 
        // go to the MyPage component
        this.navCtrl.push(RegistroConfirmacionPage)
    }

}