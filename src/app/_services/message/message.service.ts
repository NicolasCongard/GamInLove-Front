import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mp } from '../../_models/mp';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseUrl = 'http://localhost:8080/mp/';

  constructor(private http: HttpClient) { }

  /**
   * Affiche la liste des mp
   *
   * @param id
   */
  getMpByGeek(id: number): Observable<Mp[]> {
    return this.http.get<Mp[]>(`${this.baseUrl}/${id}`);
  }

  /**
   * Permet d'écrire un mp
   *
   * @param geekCible
   * @param message
   * @param geekMp
   */
  addNew(newMp: Mp): Observable<Mp[]> {
    return this.http.post<Mp[]>(`${this.baseUrl}`, newMp);
  }
}
