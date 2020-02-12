import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private baseUrl = 'http://localhost:8080/geek/';
  private errorMessage = '';

  constructor(private http: HttpClient) {
  }

  saveAppareilsToServer(geek) {
    return new Promise(
      (resolve, reject) => {
        this.http
          .post(`${this.baseUrl}`, geek)
          .subscribe(
            () => {
              resolve();
            },
            (error) => {
              reject(error);
            }
          );
      });
  }
}
