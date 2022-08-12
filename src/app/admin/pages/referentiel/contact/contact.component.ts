import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ContactService } from './contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactDetails = null as any;
  contactToUpdate = {
    idContact:"",
    adresse:"",
    codePostal:"",
    telephone:"",
    fax:"",
    email:""
  }

  constructor(private router: Router, private contactService: ContactService) { 
    this.getContactDetails();
  }

  ngOnInit(): void {
  }

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }


  register(registerForm: NgForm) {
    this.contactService.registerContact(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getContactDetails();
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

  deleteContact(contact: any) {
    this.contactService.deleteContact(contact.idContact).subscribe(
      (resp) => {
        console.log(resp);
        this.getContactDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(contact: any){
    this.contactToUpdate = contact;
  }

  updateContact(){
    this.contactService.updateContact(this.contactToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
