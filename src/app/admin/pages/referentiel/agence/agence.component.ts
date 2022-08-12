import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AgenceService } from './agence.service';
import { ContactComponent } from '../contact/contact.component';
import { ContactService } from '../contact/contact.service';
import { PaysComponent } from '../pays/pays.component';
import { PaysService } from '../pays/pays.service';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {


  agenceDetails = null as any;
  agenceToUpdate = {
    idAgence:"",
    codeInterne:"",
    libCou:"",
    libLong:""
  }

  contactDetails  = null as any;
  paysDetails  = null as any;

  constructor(private router: Router, private agenceService: AgenceService, private contactService: ContactService, private paysService:PaysService) { 
    this.getAgenceDetails();
    this.getContactDetails();
    this.getPaysDetails();
  }

  ngOnInit(): void {
  }

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }


  register(registerForm: NgForm) {
    this.agenceService.registerAgence(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getAgenceDetails();
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

  deleteAgence(agence: any) {
    this.agenceService.deleteAgence(agence.idAgence).subscribe(
      (resp) => {
        console.log(resp);
        this.getAgenceDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(agence: any){
    this.agenceToUpdate = agence;
  }

  updateAgence(){
    this.agenceService.updateAgence(this.agenceToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  getContactDetails() {
    this.contactService.getContact().subscribe(
      (resp) => {
        console.log(resp);
        this.contactDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }


  getPaysDetails() {
    this.paysService.getPays().subscribe(
      (resp) => {
        console.log(resp);
        this.paysDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
