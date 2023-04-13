import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from './container.component';
import { AsyncComponent } from '../async/async.component';
import { FechaComponent } from '../fecha/fecha.component';
import { I18npluralComponent } from '../i18nplural/i18nplural.component';
import { I18nselectComponent } from '../i18nselect/i18nselect.component';
import { JsonComponent } from '../json/json.component';
import { KeyValueComponent } from '../key-value/key-value.component';
import { NumerosComponent } from '../numeros/numeros.component';
import { SliceComponent } from '../slice/slice.component';
import { TextComponent } from '../text/text.component';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerComponent,
        TextComponent,
        NumerosComponent,
        JsonComponent,
        SliceComponent,
        FechaComponent,
        I18nselectComponent,
        I18npluralComponent,
        KeyValueComponent,
        AsyncComponent, ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
