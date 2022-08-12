import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DaveuserService } from './daveuser.service';
import { CompteBank } from 'src/app/model/CompteBank';


@Component({
  selector: 'app-daveuser',
  templateUrl: './daveuser.component.html',
  styleUrls: ['./daveuser.component.css']
})
export class DaveuserComponent implements OnInit {

  comptedaveDetails = null as any;
  comptedaveToUpdate = {
    numCompte:"",
    rib:"",
    typeCompte:"",
    codeProduit:"",    
    codeCategoryProduit:"",
    active:"",
    dateActivation:"",
    ribInternal:""
  }
  compteBank:CompteBank = new CompteBank;

  constructor(private router: Router, private daveuserService: DaveuserService) { }

  ngOnInit(): void {
    this.daveuserService.getComptedave().subscribe(compte=> this.comptedaveDetails= compte);

  }

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  register(registerForm: NgForm) {
    this.daveuserService.registerComptedave(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
       
      },
      (err) => {
        console.log(err);
      }
    );
    window.location.reload();
  }

  getComptedaveDetails() {
    this.daveuserService.getComptedave().subscribe(
      (resp) => {
        console.log(resp);
        this.comptedaveDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteComptedave(compteBank: any) {
    this.daveuserService.deleteComptedave(compteBank.numCompte).subscribe(
      (resp) => {
        console.log(resp);
        this.getComptedaveDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(compteBank: any){
    this.comptedaveToUpdate = compteBank;
  }

  updateComptedave(){
    this.daveuserService.updateComptedave(this.comptedaveToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}

