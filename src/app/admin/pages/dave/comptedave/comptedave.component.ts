import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ComptedaveService } from './comptedave.service';


@Component({
  selector: 'app-comptedave',
  templateUrl: './comptedave.component.html',
  styleUrls: ['./comptedave.component.css']
})
export class ComptedaveComponent implements OnInit {


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

  constructor(private router: Router, private comptedaveService: ComptedaveService) { }

  ngOnInit(): void {
    this.comptedaveService.getComptedave().subscribe(compte=> this.comptedaveDetails= compte);

  }


  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  register(registerForm: NgForm) {
    this.comptedaveService.registerComptedave(registerForm.value).subscribe(
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
    this.comptedaveService.getComptedave().subscribe(
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
    this.comptedaveService.deleteComptedave(compteBank.numCompte).subscribe(
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
    this.comptedaveService.updateComptedave(this.comptedaveToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}

