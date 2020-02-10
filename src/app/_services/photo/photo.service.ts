import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PhotoService {
	private baseUrl = 'http://localhost:8080/photo/';


	constructor(private http: HttpClient) { }

	getAllPhotos(): Observable<any> {
		return this.http.get(`${this.baseUrl}`);
	}
}
