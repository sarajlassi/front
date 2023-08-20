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
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
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
    formData.append('email', this.login.value.email!);
    formData.append('password', this.login.value.password!);

    this.service.login(formData).subscribe(
      (data) => {
        console.log(data);
        this.admin();
        this.login.reset();
        this.router.navigate(['/adminpanel']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
