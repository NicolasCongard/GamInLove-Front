import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Photo } from '../../_models/photo';
import { Geek } from '../../_models/geek';

@Injectable({
  providedIn: 'root'
})
export class GeekService {
  private baseUrl = 'http://localhost:8080/geek/';
  private id: number;


  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getOne(): Observable<any> {
    return this.http.get(`${this.baseUrl}/id`);
  }

  auth(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}auth?mail=${email}`);
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
