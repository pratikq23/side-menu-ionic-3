import { Component } from '@angular/core';
import { NavController,Nav } from 'ionic-angular';

import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'pspg-logoff',
  templateUrl: 'logoff.component.html'
})
export class LogoffComponent {
  constructor(private navCtrl: NavController,public nav: Nav) {
    
  }

  ionViewWillEnter() {
    this.nav.setRoot(LoginPageComponent);
  }
}
