import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { Observable } from 'rxjs';
import { Geek } from '../_models/geek';
import { GeekService } from '../_services/geek/geek.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent implements OnInit {

  // @ts-ignore
  @ViewChild('toggleButton') toggleButton: ElementRef;
  // @ts-ignore
  @ViewChild('menu') menu: ElementRef;
  geeks: Observable<Geek[]>;
  isShow = false;
  errorMessage: string;
  signinForm: FormGroup;
  geekz;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private renderer: Renderer2,
    private geekService: GeekService
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.toggleButton.nativeElement && e.target === this.menu.nativeElement) {
        this.isShow = !this.isShow;
      }
    });
  }

  ngOnInit() {
    this.initForm();
    this.reloadData();
  }

  reloadData() {
    this.geeks = this.authService.getAll();
    const email = JSON.parse(localStorage.getItem('email')).login;
    this.geekz = this.geekService.auth(email);
  }

  getId(id: number) {
    const idGeek = localStorage.setItem('id', JSON.stringify({ login: id }));
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

        console.log('Connexion réussie.');
        this.router.navigate(['profil']);
      },
      () => {
        this.errorMessage = 'Login/Mot de passe incorrect';
      }
    );
  }
}
