import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private baseUrl = 'http://localhost:8080/geek/';
  private errorMessage = "";

  constructor(private http: HttpClient) { }

  saveAppareilsToServer(geek) {
    this.http
      .post(`${this.baseUrl}`, geek)
      .subscribe(
        () => {
          this.errorMessage = "";
        },
        (error) => {
          this.errorMessage = error.status;
        }
      );

    console.log("coucou" + this.errorMessage);
    if (this.errorMessage == '400') {
      this.errorMessage = 'Un des champs est vide !';
    } else if (this.errorMessage == '409') {
      this.errorMessage = 'Le pseudo/mail est déjà utilisé';
    } else {
      this.errorMessage = 'Erreur de saisie';
    }
    return this.errorMessage;
  }
}
