import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-goback',
  templateUrl: './goback.component.html',
  styleUrls: ['./goback.component.css']
})
export class GobackComponent {
  constructor(private location: Location,) { }

  goBack(): void {
    this.location.back();
  }
}
