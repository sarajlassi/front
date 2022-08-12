import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CreditpretService } from './creditpret.service';

@Component({
  selector: 'app-creditpret',
  templateUrl: './creditpret.component.html',
  styleUrls: ['./creditpret.component.css']
})
export class CreditpretComponent implements OnInit {

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

  constructor(private router: Router, private creditpretService: CreditpretService) {
    this.getCreditpretDetails();
   }

  ngOnInit(): void {
  }

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }


  register(registerForm: NgForm) {
    this.creditpretService.registerCreditpret(registerForm.value).subscribe(
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
    this.creditpretService.getCreditpret().subscribe(
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
    this.creditpretService.deleteCreditpret(creditpret.idContrat).subscribe(
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
    this.creditpretService.updateCreditpret(this.creditpretToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
