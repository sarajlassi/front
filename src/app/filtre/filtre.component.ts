import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})
export class FiltreComponent {
  constructor(private location: Location ) { }
  goBack(): void {
    this.location.back();
  }
}
