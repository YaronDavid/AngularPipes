import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/shared/services/dark-mode.service';

@Component({
  selector: 'app-custom-container',
  templateUrl: './custom-container.component.html',
  styleUrls: ['./custom-container.component.css']
})
export class CustomContainerComponent {
  constructor(private darkModeService: DarkModeService){}

  get dark(){
    return this.darkModeService.dark
  }

  changeMode(){
    this.darkModeService.changeMode();
  }
}
