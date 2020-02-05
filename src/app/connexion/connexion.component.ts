import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { Observable } from 'rxjs';
import { Geek } from '../_models/geek';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent implements OnInit {

  geeks: Observable<Geek[]>;
  isShow = false;
  errorMessage: string;
  signinForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.reloadData();
  }

  reloadData() {
    this.geeks = this.authService.getAll();
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;

    this.authService.signInUser(email, password).then(
      () => {
        console.log('Connexion réussie.')
        this.router.navigate(['profil']);
      },
      () => {
        this.errorMessage = 'Erreur de connexion !';
      }
    );
  }

  closePopIn() {
    this.isShow = !this.isShow;
  }
}
