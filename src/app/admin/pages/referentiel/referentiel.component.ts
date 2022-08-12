import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-referentiel',
  templateUrl: './referentiel.component.html',
  styleUrls: ['./referentiel.component.css']
})
export class ReferentielComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

}
