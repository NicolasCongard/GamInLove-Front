import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Photo} from '../../_models/photo';
import * as firebase from 'firebase';
import {Geek} from '../../_models/geek';


@Injectable({
	providedIn: 'root'
})
export class RechercheService {
	private baseUrl = 'http://localhost:8080/recherche/search/';
  private geek: Geek;

	constructor(private http: HttpClient) { }

	getAll(): Observable<any> {
		return this.http.get(`${this.baseUrl}`);
	}
  saveSearch(recherche) {
    return new Promise(
      (resolve, reject) => {
        this.http
          .post(`${this.baseUrl}`, recherche)
          .subscribe(
            () => {
              resolve();
            },
            (error) => {
              reject(error);
            }
          );
      });
  }
  searchGeek(sexe: string, ville: string, ageMin: number, ageMax: number, jeu: string) {
    return this.geek;

  }

}
