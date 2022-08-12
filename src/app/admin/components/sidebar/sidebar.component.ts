import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { DaveComponent } from '../../pages/dave/dave.component';
import { EngagementComponent } from '../../pages/engagement/engagement.component';
import { ReferentielComponent } from '../../pages/referentiel/referentiel.component';



const routes: Routes = [
  {path:'referentiel', component:ReferentielComponent},
  {path:'dave', component:DaveComponent},
  {path:'engagement', component:EngagementComponent}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

}
