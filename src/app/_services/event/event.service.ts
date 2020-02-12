import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class EventService {
	private baseUrl = 'http://localhost:8080/event/';

	constructor(private http: HttpClient) { }

	getAll(): Observable<any> {
		return this.http.get(`${this.baseUrl}`);
	}

	addParticipant(id: number, idGeek: number): Observable<Event> {
		return this.http.post<Event>(`${this.baseUrl}` + id + '/' + idGeek, {});
	}
}