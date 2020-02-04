import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent implements OnInit {

  isShow = false;
  errorMessage: string;
  signinForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const name = this.signinForm.get('name').value;
    const password = this.signinForm.get('password').value;

    this.authService.signInUser(name, password).then(
      () => {
        this.router.navigate(['/profil']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  closePopIn() {
    this.isShow = !this.isShow;
  }
}
