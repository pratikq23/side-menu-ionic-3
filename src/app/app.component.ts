import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Environment } from '../config/environment';

import { LoginPageComponent } from '../app/pages/login-page/login-page.component'; 


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  providers: [SplashScreen, StatusBar]
})
export class MyApp {
  rootPage = LoginPageComponent;

  constructor(platform: Platform, private statusbar: StatusBar,
    private splashscreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusbar.styleDefault();
      this.splashscreen.hide();
    });
  }
}
