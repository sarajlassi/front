import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DeviseService } from './devise.service';

@Component({
  selector: 'app-devise',
  templateUrl: './devise.component.html',
  styleUrls: ['./devise.component.css']
})
export class DeviseComponent implements OnInit {


  deviseDetails = null as any;
  deviseToUpdate = {
    idDevise:"",
    decimale:"",
    nomDecimal:"",
    nom:"",
    nomTraduit:"",
    quotite:"",
    certain:"",
    nomInternal:""
  }


  constructor(private router: Router, private deviseService: DeviseService) {

    this.getDeviseDetails();
   }

  ngOnInit(): void {
  }

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  register(registerForm: NgForm) {
    this.deviseService.registerDevise(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getDeviseDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getDeviseDetails() {
    this.deviseService.getDevises().subscribe(
      (resp) => {
        console.log(resp);
        this.deviseDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteDevise(devise: any) {
    this.deviseService.deleteDevise(devise.idDevise).subscribe(
      (resp) => {
        console.log(resp);
        this.getDeviseDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(devise: any){
    this.deviseToUpdate = devise;
  }

  updateDevise(){
    this.deviseService.updateDevises(this.deviseToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
