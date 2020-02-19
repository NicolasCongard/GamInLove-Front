import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Recherche} from '../../_models/recherche';
import {Router} from '@angular/router';



@Injectable({
	providedIn: 'root'
})
export class RechercheService {
	private baseUrl = 'http://localhost:8080/recherche/search/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private recherche: Recherche;
	constructor(private http: HttpClient, private router: Router) { }

  /**
   * Envois la base URL ainsi que les paramètres.
   * @param recherche
   */
  searchGeek(recherche: Recherche): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, recherche, this.httpOptions);
  }

  /**
   * Route l'utilisateur quand il clique sur le bouton [Cf HTML] avec des paramètres en URL pour faire sa recherche.
   * @param recherche
   */
  goLiker(recherche: Recherche) {
    this.router.navigate(['/like'], { queryParams: { sexe: recherche.sexe, ville: recherche.ville, ageMin: recherche.ageMin, ageMax: recherche.ageMax } });
	}
}
