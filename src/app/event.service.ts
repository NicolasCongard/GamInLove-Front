import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

	addParticipant(id: number, idGeek: number): Observable<any> {
		return this.http.post(`${this.baseUrl}/${id}`, idGeek);
	}
}