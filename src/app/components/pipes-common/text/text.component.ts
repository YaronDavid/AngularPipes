import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit{

  text: string = "TiTuLo De ApLiCaCiOn";

  constructor(){}

  ngOnInit(): void {
      
  }
}
