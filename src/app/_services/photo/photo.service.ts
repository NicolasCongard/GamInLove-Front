import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Photo} from '../../_models/photo';
import {Geek} from '../../_models/geek';

@Injectable({
	providedIn: 'root'
})
export class PhotoService {
	private baseUrl = 'http://localhost:8080/photo/';
  private geek: Geek;

	constructor(private http: HttpClient) { }

	getAllPhotos(): Observable<any> {
		return this.http.get(`${this.baseUrl}`);
	}
  findOneAlbum(id: number):Observable<Photo> {

    return this.http.get<Photo>(this.baseUrl + 'album' + id);
  }

  delOnePhoto(id: number):Observable<Photo> {
    this.geek = JSON.parse(window.sessionStorage.getItem('geek'));
    let idGeek = this.geek.id;
    return this.http.delete<Photo>(this.baseUrl + idGeek + '/' + id);
  }

}
