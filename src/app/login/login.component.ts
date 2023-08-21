import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
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

  constructor(private router: Router) {}

  admin() {
    localStorage.setItem('role', 'administrateur');
  }

  onSubmit() {
    if (!this.login.valid) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (this.login.value.email === 'youssef@gmail.com' && this.login.value.password === '12345') {
      this.admin();
      this.login.reset();
      this.router.navigate(['/adminpanel']);
    } else {
      console.error("Access denied");
    }
  }
}
