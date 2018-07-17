import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { MenuComponent } from '../app/pages/menu/menu.component';
import { LoginPageComponent } from '../app/pages/login-page/login-page.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { LogoffComponent } from '../app/pages/logoff/logoff.component';
import { HeaderMenuComponent } from '../app/pages/header-menu/header-menu.component';

@NgModule({
  declarations: [
    MyApp,
    LoginPageComponent,
    MenuComponent,
    HomeComponent,
    HeaderMenuComponent,
    LogoffComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      
    }),
    BrowserModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPageComponent,
    MenuComponent,
    HomeComponent,
    HeaderMenuComponent,
    LogoffComponent
  ],
})
export class AppModule {}
