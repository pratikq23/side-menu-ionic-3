import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.component.html'
})
export class LoginPageComponent {
  public login: any = { username: '', password: '' };
  submitted = false;

  constructor(public navCtrl: NavController ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.navCtrl.push(MenuComponent);
    }
  }

}
