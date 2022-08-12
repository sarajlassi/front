import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefuserserviceService } from './refuserservice.service';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/model/Client';


@Component({
  selector: 'app-referentieluser',
  templateUrl: './referentieluser.component.html',
  styleUrls: ['./referentieluser.component.css']
})
export class ReferentieluserComponent implements OnInit {
  client:Client= new Client();
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

  constructor(private router: Router, private clientService: RefuserserviceService) { 
    this.getClientPhyDetails();
    this.getClientMorDetails();
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
  


  getClientPhyCinDetails(cin: any) {
     this.clientService.getClientPhyCin(cin).subscribe(
      (resp) => {
        console.log(resp);
        this.clientPhyDetails.cin= resp;
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

  deleteClientPhyCin(cin: any) {
    this.clientService.deleteClientPhyCin(cin).subscribe(
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


}
