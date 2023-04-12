import { Component } from '@angular/core';

@Component({
  selector: 'app-i18nselect',
  templateUrl: './i18nselect.component.html',
  styleUrls: ['./i18nselect.component.css']
})
export class I18nselectComponent {
  genero = 'm'
  mensaje = {
    'm': 'Bienvenido usuario',
    'f': 'Bienvenida usuaira',
    'other': 'Hola'
  }
}
