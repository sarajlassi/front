import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PaysService } from './pays.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {


  paysDetails = null as any;
  paysToUpdate = {
    idPays:"",
    codeTelephoniqueRegional:"",
    nom:"",
    codeNumerique:"",
    nomTraduit:"",
    nationalite:"",
    conventionFiscale:"",
    embargo:""
  }

  constructor(private router: Router, private paysService: PaysService) {

    this.getPaysDetails();
   }

  ngOnInit(): void {
  }

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  register(registerForm: NgForm) {
    this.paysService.registerPays(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getPaysDetails();
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

  deletePays(pays: any) {
    this.paysService.deletePays(pays.idPays).subscribe(
      (resp) => {
        console.log(resp);
        this.getPaysDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(pays: any){
    this.paysToUpdate = pays;
  }

  updatePays(){
    this.paysService.updatePays(this.paysToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
