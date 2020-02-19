import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Action } from 'src/app/_models/action';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  private baseUrl = 'http://localhost:8080/action/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getActionByGeek(id: number): Observable<Action> {
    return this.http.get<Action>(`${this.baseUrl}` + id);
  }
}
