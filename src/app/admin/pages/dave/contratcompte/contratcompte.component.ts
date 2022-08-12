import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ContratcompteService } from './contratcompte.service';
import { ClientService } from '../../referentiel/client/client.service';
import { ClientComponent } from '../../referentiel/client/client.component';


@Component({
  selector: 'app-contratcompte',
  templateUrl: './contratcompte.component.html',
  styleUrls: ['./contratcompte.component.css']
})
export class ContratcompteComponent implements OnInit {

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

  contratcompteDetails = null as any;
  contratcompteToUpdate = {
    idContrat:"",
    numCompte:"",
    dateCloture:"",
    typeSignature:"",
    dateActivation:"",
    renouvelable:"",
    confirme:"",
    dateCreation:""
  }

  clientPhyDetails  = null as any;
  
  clientMorDetails  = null as any;

  constructor(private router: Router, private contratcompteService: ContratcompteService, private clientService: ClientService) { 
    this.getContratDetails();
    this.getContratcompteDetails();
    this.getClientMorDetails();
    this.getClientPhyDetails();

  }

  ngOnInit(): void {
/*     this.contratcompteService.getContrat().subscribe(contrat=> this.contratDetails= contrat);
    this.contratcompteService.getContratcompte().subscribe(contratcompte=> this.contratcompteDetails= contratcompte);
    this.clientService.getClientMor().subscribe(clientMor=> this.clientMorDetails= clientMor);
    this.clientService.getClientPhy().subscribe(clientPhy=> this.clientPhyDetails= clientPhy); */

  }


  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  registerContrat(registerForm: NgForm) {
    this.contratcompteService.registerContrat(registerForm.value).subscribe(
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
    this.contratcompteService.getContrat().subscribe(
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
    this.contratcompteService.deleteContrat(contrat.idContrat).subscribe(
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
    this.contratcompteService.updateContrat(this.contratToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  registerContratcompte(registerForm1: NgForm) {
    this.contratcompteService.registerContratcompte(registerForm1.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm1.reset();
        this.getContratcompteDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getContratcompteDetails() {
    this.contratcompteService.getContratcompte().subscribe(
      (resp) => {
        console.log(resp);
        this.contratcompteDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteContratcompte(contratcompte: any) {
    this.contratcompteService.deleteContratcompte(contratcompte.idContrat).subscribe(
      (resp) => {
        console.log(resp);
        this.getContratcompteDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editContratcompte(contratcompte: any){
    this.contratcompteToUpdate = contratcompte;
  }

  updateContratcompte(){
    this.contratcompteService.updateContratcompte(this.contratcompteToUpdate).subscribe(
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
