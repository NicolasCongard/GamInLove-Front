import {Component, OnInit, Renderer2,ElementRef,ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Geek} from '../_models/geek';
import {HttpClient} from '@angular/common/http';
import {InscriptionService} from '../_services/inscription/inscription.service';
import {Router} from '@angular/router';

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
    private router: Router
  ) {
    this.renderer.listen('window', 'click',(e:Event)=>{
      if(e.target !== this.toggleButton.nativeElement && e.target ==this.menu.nativeElement){
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit() {
    this.inscriptionForm = this.fb.group({
      pseudo: [],
      password: [],
      age: [],
      ville: [],
      sexe: ['Homme'],
      email: [],
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
    this.errorMessage = this.inscriptionService.saveAppareilsToServer(geek);
  }

  resetUserForm() {
    this.inscriptionForm.reset();
    this.errorMessage = '';
  }

}
