import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../../_models/photo';
import { Action } from 'src/app/_models/action';

@Injectable({
	providedIn: 'root'
})
export class LikeService {
	private baseUrl = 'http://localhost:8080/photo/album/';
	private baseUrlAction = 'http://localhost:8080/action/';


	constructor(private http: HttpClient) { }

	getById(id: number): Observable<Photo[]> {
		return this.http.get<Photo[]>(`${this.baseUrl}` + id);
	}

	addNew(action: Action): Observable<Action[]> {
		return this.http.post<Action[]>(`${this.baseUrlAction}`, action);
	}

}
