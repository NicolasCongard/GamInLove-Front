import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Geek } from '../_models/geek';
import { HttpClient } from '@angular/common/http';
import { InscriptionService } from '../_services/inscription/inscription.service';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  // @ts-ignore
  @ViewChild('toggleButton') toggleButton: ElementRef;
  // @ts-ignore
  @ViewChild('menu') menu: ElementRef;

  private inscriptionForm: FormGroup;
  private errorMessage: string;
  private submitted = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private inscriptionService: InscriptionService,
    private renderer: Renderer2,
    private authService: AuthService,
    private router: Router
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.toggleButton.nativeElement && e.target === this.menu.nativeElement) {
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit() {
    this.inscriptionForm = this.fb.group({
      pseudo: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      confirmPassword: ['', Validators.required],
      age: ['18', Validators.required],
      ville: ['', Validators.required],
      sexe: ['Homme', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
    this.inscriptionForm.reset();
  }

  get f() { return this.inscriptionForm.controls; }

  inscription() {
    console.log("submitted" + this.submitted);
    this.submitted = true;

    if (this.inscriptionForm.invalid) {
      let msg='';

      if(this.inscriptionForm.controls.pseudo.errors.required) {
        msg +="Champs Pseudo vide.\n";
      }
      if(this.inscriptionForm.controls.password.errors.required) {
        msg += "Champs Password vide.\n";
      }
      if(this.inscriptionForm.controls.password.errors.minlength) {
        msg +="Password doit contenir au moins 6 caractères.\n";
      }
      if(this.inscriptionForm.controls.confirmPassword.errors.required) {
        msg +="Champs Confirmation vide.\n";
      }
      if(this.inscriptionForm.controls.confirmPassword.errors.mustMatch) {
        msg +="Mot de passe différents.\n";
      }
      if(this.inscriptionForm.controls.age.errors.required) {
        msg +="Champs Age vide.\n";
      }
      if(this.inscriptionForm.controls.sexe.errors.required) {
        msg +="Champs Sexe vide.\n";
      }
      if(this.inscriptionForm.controls.ville.errors.required) {
        msg +="Champs Ville vide.\n";
      }
      if(this.inscriptionForm.controls.email.errors.required) {
        msg +="Champs Email vide.\n";
      }
      if(this.inscriptionForm.controls.email.errors.email) {
        msg +="Adresse mail invalide\n";
      }

      this.submitted = false;

      alert(msg);

      return;
    }

    let geek = new Geek();
    geek.pseudo = this.inscriptionForm.get('pseudo').value;
    geek.age = this.inscriptionForm.get('age').value;
    geek.ville = this.inscriptionForm.get('ville').value;
    geek.sexe = this.inscriptionForm.get('sexe').value;
    geek.email = this.inscriptionForm.get('email').value;
    geek.password = this.inscriptionForm.get('password').value;
    geek.typeCompte = 'Basic';
    this.authService.createNewUser(geek.email, geek.password).then(
      () => {
        this.inscriptionService.saveGeek(geek).then(
          () => {
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.inscriptionForm.value, null, 4));
            this.authService.signOutUser();
          },
          (error) => {
            this.errorMessage = error;
          }
        );
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  resetUserForm() {
    this.submitted = false;
    this.inscriptionForm.reset();
  }

}
