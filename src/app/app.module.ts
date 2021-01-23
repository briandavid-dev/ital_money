import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import { RegistroConfirmacionPage } from '../pages/registro-confirmacion/registro-confirmacion';
import { RegistroConfirmacionExitosaPage } from '../pages/registro-confirmacion-exitosa/registro-confirmacion-exitosa';
import { PageGestionDivisas1 } from '../pages/gestion-divisas-1/gestion-divisas-1';
import { PageGestionDivisasComprar } from '../pages/gestion-divisas-comprar/gestion-divisas-comprar';
import { PageGestionDivisasComprarConfirmarDatos } from '../pages/gestion-divisas-comprar-confirmar-datos/gestion-divisas-comprar-confirmar-datos';
import { PageGestionDivisasComprarProcesoCompleto } from '../pages/gestion-divisas-comprar-proceso-completo/gestion-divisas-comprar-proceso-completo';
import { PageMenuPopover1 } from '../pages/menu-popover-1/menu-popover-1';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    RegistroConfirmacionPage,
    RegistroConfirmacionExitosaPage,
    PageGestionDivisas1,
    PageGestionDivisasComprar,
    PageGestionDivisasComprarConfirmarDatos,
    PageGestionDivisasComprarProcesoCompleto,
    PageMenuPopover1
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage,
    RegistroConfirmacionPage,
    RegistroConfirmacionExitosaPage,
    PageGestionDivisas1,
    PageGestionDivisasComprar,
    PageGestionDivisasComprarConfirmarDatos,
    PageGestionDivisasComprarProcesoCompleto,
    PageMenuPopover1
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
