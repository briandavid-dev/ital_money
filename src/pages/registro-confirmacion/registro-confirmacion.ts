import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroConfirmacionExitosaPage } from '../registro-confirmacion-exitosa/registro-confirmacion-exitosa';

@Component({
    selector: 'page-registro-confirmacion',
    templateUrl: 'registro-confirmacion.html'
})

export class RegistroConfirmacionPage {
    
    constructor(public navCtrl: NavController) {

    }


    goToPageRegistroConfirmacionExitosa() { 
        // go to the MyPage component
        this.navCtrl.setRoot(RegistroConfirmacionExitosaPage)
    }

}