import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private baseUrl = 'http://localhost:8080/geek/';

  constructor(private http: HttpClient) {
  }

  saveGeek(geek) {
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
