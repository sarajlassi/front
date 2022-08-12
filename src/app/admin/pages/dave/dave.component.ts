import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dave',
  templateUrl: './dave.component.html',
  styleUrls: ['./dave.component.css']
})
export class DaveComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }


}
