import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';
@Component({
  selector: 'pspg-header-menu',
  templateUrl: 'header-menu.component.html'
})
export class HeaderMenuComponent {
  constructor(public nav: Nav) {}
}
