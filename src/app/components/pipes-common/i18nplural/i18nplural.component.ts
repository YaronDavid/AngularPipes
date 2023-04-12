import { Component } from '@angular/core';

@Component({
  selector: 'app-i18nplural',
  templateUrl: './i18nplural.component.html',
  styleUrls: ['./i18nplural.component.css']
})
export class I18npluralComponent {
  notificaciones = 0

  mensaje = {
    "=0": "no tienes notificaciones",
    "=1": "tienes una notificacion",
    other : "tienes # notificaciones"
  }

  addNotificacion(){
    this.notificaciones++;
  }
}
