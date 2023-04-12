import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { TextComponent } from './text/text.component';
import { NumerosComponent } from './numeros/numeros.component';
import { FechaComponent } from './fecha/fecha.component';
import { JsonComponent } from './json/json.component';
import { KeyValueComponent } from './key-value/key-value.component';
import { SliceComponent } from './slice/slice.component';
import { I18nselectComponent } from './i18nselect/i18nselect.component';
import { I18npluralComponent } from './i18nplural/i18nplural.component';
import { AsyncComponent } from './async/async.component';

@NgModule({
  declarations: [ContainerComponent, TextComponent, NumerosComponent, FechaComponent, JsonComponent, KeyValueComponent, SliceComponent, I18nselectComponent, I18npluralComponent, AsyncComponent],
  imports: [CommonModule],
  exports: [ContainerComponent],
})
export class PipesCommonModule {}
