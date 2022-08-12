import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.css']
})
export class EngagementComponent implements OnInit {

 
  constructor(private router: Router) { }

  ngOnInit() {

  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }


}
