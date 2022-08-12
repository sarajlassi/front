import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CreditrenouvelableService } from './creditrenouvelable.service';

@Component({
  selector: 'app-creditrenouvelable',
  templateUrl: './creditrenouvelable.component.html',
  styleUrls: ['./creditrenouvelable.component.css']
})
export class CreditrenouvelableComponent implements OnInit {



  creditrenouvelableDetails = null as any;
  creditrenouvelableToUpdate = {
    idContrat:"",
    dateFin:"",
    apport:""
  }



  constructor(private router: Router, private creditrenouvelableService: CreditrenouvelableService) {
    this.getCreditrenouvelableDetails();
   }

  ngOnInit(): void {
  }

  


  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }


  register(registerForm: NgForm) {
    this.creditrenouvelableService.registerCreditrenouvelable(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getCreditrenouvelableDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCreditrenouvelableDetails() {
    this.creditrenouvelableService.getCreditrenouvelable().subscribe(
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
    this.creditrenouvelableService.deleteCreditrenouvelable(creditrenouvelable.idContrat).subscribe(
      (resp) => {
        console.log(resp);
        this.getCreditrenouvelableDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(creditrenouvelable: any){
    this.creditrenouvelableToUpdate = creditrenouvelable;
  }

  updateCreditpret(){
    this.creditrenouvelableService.updateCreditrenouvelable(this.creditrenouvelableToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}

