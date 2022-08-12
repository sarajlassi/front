import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ContratcreditService } from './contratcredit.service';
import { ClientService } from '../../referentiel/client/client.service';

@Component({
  selector: 'app-contratcredit',
  templateUrl: './contratcredit.component.html',
  styleUrls: ['./contratcredit.component.css']
})
export class ContratcreditComponent implements OnInit {

  contratDetails = null as any;
  contratToUpdate = {
    idContrat:"",
    statusContrat:"",
    reference:"",
    renevable:"",
    dateDebut:"",
    dateFin:"",
    active:"",
    infoConvention:""
  }

  contratcreditDetails = null as any;
  contratcreditToUpdate = {
    idContrat:"",
    riskInterneEncouru:"",
    riskLegalEncouru:"",
    ribCompte:"",
    montantAffecte:"",
    changeClasse:"",
    dateSituation:"",
    reclassementManuel:""
  }


  clientPhyDetails  = null as any;
  
  clientMorDetails  = null as any;


  constructor(private router: Router, private contratcreditService: ContratcreditService, private clientService: ClientService) { 
    this.getContratDetails();
    this.getContratcreditDetails();
    this.getClientMorDetails();
    this.getClientPhyDetails();

  }

  ngOnInit(): void {
  }


  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }


  registerContrat(registerForm: NgForm) {
    this.contratcreditService.registerContrat(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getContratDetails();
        //this.getClientMorDetails();
        //this.getClientPhyDetails();
      },
      (err) => {
        console.log(err);
      }
    );
   // window.location.reload();
  }

  getContratDetails() {
    this.contratcreditService.getContrat().subscribe(
      (resp) => {
        console.log(resp);
        this.contratDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteContrat(contrat: any) {
    this.contratcreditService.deleteContrat(contrat.idContrat).subscribe(
      (resp) => {
        console.log(resp);
        this.getContratDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editContrat(contrat: any){
    this.contratToUpdate = contrat;
  }

  updateContrat(){
    this.contratcreditService.updateContrat(this.contratToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  registerContratcredit(registerForm1: NgForm) {
    this.contratcreditService.registerContratcredit(registerForm1.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm1.reset();
        this.getContratcreditDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getContratcreditDetails() {
    this.contratcreditService.getContratcredit().subscribe(
      (resp) => {
        console.log(resp);
        this.contratcreditDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteContratcredit(contratcredit: any) {
    this.contratcreditService.deleteContratcredit(contratcredit.idContrat).subscribe(
      (resp) => {
        console.log(resp);
        this.getContratcreditDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editContratcredit(contratcredit: any){
    this.contratcreditToUpdate = contratcredit;
  }

  updateContratcredit(){
    this.contratcreditService.updateContratcredit(this.contratcreditToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  getClientPhyDetails() {
    this.clientService.getClientPhy().subscribe(
      (resp) => {
        console.log(resp);
        this.clientPhyDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getClientMorDetails() {
    this.clientService.getClientMor().subscribe(
      (resp) => {
        console.log(resp);
        this.clientMorDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  } 
}

