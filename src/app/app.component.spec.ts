import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DarkModePipe } from './shared/pipes/dark-mode.pipe';
import { ContainerComponent } from './components/pipes-common/container/container.component';
import { CustomContainerComponent } from './components/custom-pipes/custom-container/custom-container.component';
import { TextComponent } from './components/pipes-common/text/text.component';
import { NumerosComponent } from './components/pipes-common/numeros/numeros.component';
import { JsonComponent } from './components/pipes-common/json/json.component';
import { SliceComponent } from './components/pipes-common/slice/slice.component';
import { FechaComponent } from './components/pipes-common/fecha/fecha.component';
import { I18nselectComponent } from './components/pipes-common/i18nselect/i18nselect.component';
import { I18npluralComponent } from './components/pipes-common/i18nplural/i18nplural.component';
import { KeyValueComponent } from './components/pipes-common/key-value/key-value.component';
import { AsyncComponent } from './components/pipes-common/async/async.component';
import { TemperaturePipe } from './shared/pipes/temperature.pipe';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContainerComponent,
        CustomContainerComponent,
        TextComponent,
        NumerosComponent,
        JsonComponent,
        SliceComponent,
        FechaComponent,
        I18nselectComponent,
        I18npluralComponent,
        KeyValueComponent,
        AsyncComponent,
        DarkModePipe,
        TemperaturePipe
      ],
    }).compileComponents();
  });

  xit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
