import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent {
  constructor(private location: Location,) { }

  goBack(): void {
    this.location.back();
  }
}
