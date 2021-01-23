import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';


@Component({
    selector: 'page-registro-confirmacion-exitosa',
    templateUrl: 'registro-confirmacion-exitosa.html'
})

export class RegistroConfirmacionExitosaPage {
     
    constructor(public navCtrl: NavController) {

    }


    goToPageIniciarSesion() { 
        // go to the MyPage component
        this.navCtrl.setRoot(HomePage)
    }

}