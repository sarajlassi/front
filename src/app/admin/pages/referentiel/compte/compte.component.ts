import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CompteService } from './compte.service';
import { AgenceService } from '../agence/agence.service';
import { DeviseService } from '../devise/devise.service';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  compteDetails = null as any;
  compteToUpdate = {
    numCpt:"",
    cloture:"",
    dateCLoture:"",
    rib:"",
    description:"",
    soldeReel:"",
    typeCompte:""
  }
  agenceDetails = null as any;
  deviseDetails = null as any;

  constructor(private router: Router, private compteService: CompteService, private agenceService:AgenceService, private deviseService: DeviseService) { 
    this.getCompteDetails();
    this.getAgenceDetails();
    this.getDeviseDetails();
  }

  ngOnInit(): void {
  }

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }


  register(registerForm: NgForm) {
    this.compteService.registerCompte(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getCompteDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCompteDetails() {
    this.compteService.getCompte().subscribe(
      (resp) => {
        console.log(resp);
        this.compteDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteCompte(compte: any) {
    this.compteService.deleteCompte(compte.numCpt).subscribe(
      (resp) => {
        console.log(resp);
        this.getCompteDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(compte: any){
    this.compteToUpdate = compte;
  }

  updateCompte(){
    this.compteService.updateCompte(this.compteToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  getAgenceDetails() {
    this.agenceService.getAgence().subscribe(
      (resp) => {
        console.log(resp);
        this.agenceDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getDeviseDetails() {
    this.deviseService.getDevises().subscribe(
      (resp) => {
        console.log(resp);
        this.deviseDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }


}
