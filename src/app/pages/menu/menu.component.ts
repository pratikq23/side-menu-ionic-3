import { Component } from '@angular/core';
import { NavController,NavParams,Nav } from 'ionic-angular';

import { LoginPageComponent } from '../login-page/login-page.component';
import { HomeComponent } from '../home/home.component';
import { LogoffComponent } from '../logoff/logoff.component';


export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  index?: number;
}

@Component({
  selector: 'pspg-menu',
  templateUrl: 'menu.component.html'
})

export class MenuComponent {
  public rootPage = HomeComponent;

  public appPages: PageInterface[] = [
    { title: 'Home',  component: HomeComponent, index: 0, icon: 'home' },
    { title: 'Log Off',  component: LogoffComponent, index: 1, icon: 'exit' }
  ];

  constructor(public navCtrl: NavController , 
    public navParams: NavParams , 
    public nav: Nav) {
    this.rootPage = HomeComponent;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  openPage(p) {

    if (p.title != "Log Off") {
      this.rootPage = p.component;
    } else {
      this.nav.setRoot(LoginPageComponent);
    }
      
  }
}
