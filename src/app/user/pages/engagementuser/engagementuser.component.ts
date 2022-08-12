import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EngagementuserService } from './engagementuser.service';

@Component({
  selector: 'app-engagementuser',
  templateUrl: './engagementuser.component.html',
  styleUrls: ['./engagementuser.component.css']
})
export class EngagementuserComponent implements OnInit {

  creditrenouvelableDetails = null as any;
  creditrenouvelableToUpdate = {
    idContrat:"",
    dateFin:"",
    apport:""
  }

  creditpretDetails = null as any;
  creditpretToUpdate = {
    idContrat:"",
    tauxProgression:"",
    datePremiereTranche:"",
    estReporte:"",
    estRenouvelable:"",
    dateEmission:"",
    dateExpiration:"",
    calAssurance:""
  }


  constructor(private router: Router, private engagementuserService: EngagementuserService) {
    this.getCreditrenouvelableDetails();
    this.getCreditpretDetails();
   }


  ngOnInit(): void {
  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  registerR(registerForm1: NgForm) {
    this.engagementuserService.registerCreditrenouvelable(registerForm1.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm1.reset();
        this.getCreditrenouvelableDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCreditrenouvelableDetails() {
    this.engagementuserService.getCreditrenouvelable().subscribe(
      (resp) => {
        console.log(resp);
        this.creditrenouvelableDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteCreditrenouvelable(creditrenouvelable: any) {
    this.engagementuserService.deleteCreditrenouvelable(creditrenouvelable.idContrat).subscribe(
      (resp) => {
        console.log(resp);
        this.getCreditrenouvelableDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editR(creditrenouvelable: any){
    this.creditrenouvelableToUpdate = creditrenouvelable;
  }

  updateCreditrenouvelable(){
    this.engagementuserService.updateCreditrenouvelable(this.creditrenouvelableToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  register(registerForm: NgForm) {
    this.engagementuserService.registerCreditpret(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getCreditpretDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCreditpretDetails() {
    this.engagementuserService.getCreditpret().subscribe(
      (resp) => {
        console.log(resp);
        this.creditpretDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteCreditpret(creditpret: any) {
    this.engagementuserService.deleteCreditpret(creditpret.idContrat).subscribe(
      (resp) => {
        console.log(resp);
        this.getCreditpretDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(creditpret: any){
    this.creditpretToUpdate = creditpret;
  }

  updateCreditpret(){
    this.engagementuserService.updateCreditpret(this.creditpretToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}

