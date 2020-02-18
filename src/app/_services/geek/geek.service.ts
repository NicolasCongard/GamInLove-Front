import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Photo } from '../../_models/photo';
import { Geek } from '../../_models/geek';
import {Recherche} from '../../_models/recherche';

@Injectable({
  providedIn: 'root'
})
export class GeekService {
  private baseUrl = 'http://localhost:8080/geek/';
  private baseUrlSearch = 'http://localhost:8080/recherche/';
  private baseUrlPhoto = 'http://localhost:8080/photo/';
  private id: number;
  private idGeek: number;
  private photo: Photo;


  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getOne(): Observable<any> {
    return this.http.get(`${this.baseUrl}/id`);
  }

  auth(token: string): Observable<Geek> {
    return this.http.get<Geek>(`${this.baseUrl}auth?token=`+token);
  }

  savePhoto(photo, idGeek): Observable<Photo> {
    return this.http.post<Photo>(`${this.baseUrlPhoto}`+idGeek, photo);
  }

  uploadPhoto(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref()
          .child('images/' + almostUniqueFileName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement…');
          },
          (error) => {
            console.log('Erreur de chargement ! : ' + error);
            reject();
          },
          () => {
            resolve(upload.snapshot.ref.getDownloadURL());
          }
        );
      }
    );
  }
}
