import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _settings: SettingsService ) { }

  ngOnInit() {
    this.checkCheckIcon();
  }

  changeColor( themeColor: string , link: any) {
    this.drawCheck(link);
    this._settings.applyTheme( themeColor );

  }

  drawCheck( link: any ) {
    let selectors: any = document.getElementsByClassName('selector');
    for ( let ref of selectors ) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  checkCheckIcon( ) {
    let selectors: any = document.getElementsByClassName('selector');
    let theme = this._settings.settings.theme;
    for ( let ref of selectors ) {
      if ( ref.getAttribute('data-theme') === theme ) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
