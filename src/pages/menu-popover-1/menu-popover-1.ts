import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-menu-popover-1',
  templateUrl: 'menu-popover-1.html'
})
export class PageMenuPopover1 {

  constructor(public navCtrl: NavController) {

  }

  goToPageHome() { 
      this.navCtrl.push(HomePage)
  }


}
