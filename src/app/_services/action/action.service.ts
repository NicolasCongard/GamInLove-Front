import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Action } from 'src/app/_models/action';
import { Coop } from 'src/app/_models/coop';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  private baseUrl = 'http://localhost:8080/action/';
  private baseUrlCoop = 'http://localhost:8080/coop/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getActionByGeek(id: number): Observable<Action> {
    return this.http.get<Action>(`${this.baseUrl}` + id);
  }

  addNew(id: number, coop: Coop): Observable<Coop> {
    return this.http.post<Coop>(`${this.baseUrlCoop}` + id, coop);
  }
}
