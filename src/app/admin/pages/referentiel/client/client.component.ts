import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClientService } from './client.service';
import { AgenceComponent } from '../agence/agence.component';
import { AgenceService } from '../agence/agence.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientPhyDetails = null as any;
  clientPhyToUpdate = {
    idClient:"",
    //type_client:"",
    cin:"",
    prenom:"",
    nom:"",
    dateNaissance:"",
    emploi:""
  }

  clientMorDetails = null as any;
  clientMorToUpdate = {
    idClient:"",
    //type_client:"",
    matricule:"",
    dateCreation:"",
    libCou:"",
    libLong:""
  }

  agenceDetails  = null as any;

  constructor(private router: Router, private clientService: ClientService, private agenceService: AgenceService) { 
    this.getClientPhyDetails();
    this.getClientMorDetails();
    this.getAgenceDetails();
  }

  ngOnInit(): void {
  }

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }


  registerPhy(registerForm: NgForm) {
    this.clientService.registerClientPhy(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getClientPhyDetails();
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

  deleteClientPhy(clientPhy: any) {
    this.clientService.deleteClientPhy(clientPhy.idClient).subscribe(
      (resp) => {
        console.log(resp);
        this.getClientPhyDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editPhy(clientPhy: any){
    this.clientPhyToUpdate = clientPhy;
  }

  updateClientPhy(){
    this.clientService.updateClientPhy(this.clientPhyToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  registerMor(registerForm1: NgForm) {
    this.clientService.registerClientMor(registerForm1.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm1.reset();
        this.getClientMorDetails();
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

  deleteClientMor(clientMor: any) {
    this.clientService.deleteClientMor(clientMor.idClient).subscribe(
      (resp) => {
        console.log(resp);
        this.getClientMorDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editMor(clientMor: any){
    this.clientMorToUpdate = clientMor;
  }

  updateClientMor(){
    this.clientService.updateClientMor(this.clientMorToUpdate).subscribe(
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

}
