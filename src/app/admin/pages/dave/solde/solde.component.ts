import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SoldeService } from './solde.service';

@Component({
  selector: 'app-solde',
  templateUrl: './solde.component.html',
  styleUrls: ['./solde.component.css']
})
export class SoldeComponent implements OnInit {

  soldeDetails = null as any;
  soldeToUpdate = {
    idSoldeCompte:"",
    datePosition:"",
    dateFin:"",
    montBloq:"",    
    montDecouv:"",
    montMoratoire:"",
    creditMvt:"",
    debitMvt:""
  }


  constructor(private router: Router, private soldeService: SoldeService) { }

  ngOnInit(): void {
  }


  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  register(registerForm: NgForm) {
    this.soldeService.registerSolde(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getSoldeDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getSoldeDetails() {
    this.soldeService.getSolde().subscribe(
      (resp) => {
        console.log(resp);
        this.soldeDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteSolde(solde: any) {
    this.soldeService.deleteSolde(solde.idSoldeCompte).subscribe(
      (resp) => {
        console.log(resp);
        this.getSoldeDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(solde: any){
    this.soldeToUpdate = solde;
  }

  updateSolde(){
    this.soldeService.updateSolde(this.soldeToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}

