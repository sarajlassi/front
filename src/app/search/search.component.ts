import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private location: Location ) { }
  goBack(): void {
    this.location.back();
  }
}
