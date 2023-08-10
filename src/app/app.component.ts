import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  textInput: string = '';
  showVirtualKeyboard: boolean = false;

  onKeyPress(key: string) {
    this.textInput += key;
  }
}
