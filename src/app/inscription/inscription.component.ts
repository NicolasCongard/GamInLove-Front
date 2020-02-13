import {Component, OnInit, Renderer2, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Geek} from '../_models/geek';
import {HttpClient} from '@angular/common/http';
import {InscriptionService} from '../_services/inscription/inscription.service';
import {Router} from '@angular/router';
import {AuthService} from '../_services/auth/auth.service';

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

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private inscriptionService: InscriptionService,
    private renderer: Renderer2,
    private authService: AuthService,
    private router: Router
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.toggleButton.nativeElement && e.target == this.menu.nativeElement) {
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit() {
    this.inscriptionForm = this.fb.group({
      pseudo: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      age: ['18', Validators.required],
      ville: ['', Validators.required],
      sexe: ['Homme', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  inscription() {
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
    this.inscriptionForm.reset();
    this.errorMessage = '';
  }

}
