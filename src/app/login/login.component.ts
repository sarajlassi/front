import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = new FormGroup({
    Email: new FormControl('', [Validators.required]),
    mdp: new FormControl('', [Validators.required]),
  });

  constructor(private service: ServiceService,private router:Router) {}

  get f() {
    return this.login.controls;
  }

  admin() {
    localStorage.setItem('role', 'administrateur');
  }

  onSubmit() {
    if (!this.login.valid) {
      alert('Veuillez remplir tous les champs obligatoires ');
    }

    const formData = new FormData();
    formData.append('Email', this.login.value.Email!);
    formData.append('mdp', this.login.value.mdp!);

    this.service.login(formData).subscribe(
      (data) => {
        console.log(data);
        this.admin();
        this.router.navigate(['/adminpanel']);

        this.login.reset();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}