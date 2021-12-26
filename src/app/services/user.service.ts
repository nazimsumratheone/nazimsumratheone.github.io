import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url = environment.API_URL;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": "true",
      })
    };
    const url = `${this.url}/users`;
    return this.http.get(url, httpOptions)
  }

  public getUniqueId(parts: number): string {
    const stringArr = [];
    for (let i = 0; i < parts; i++) {
      const uniqueId = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(uniqueId);
    }
    return stringArr.join('-');
  }
}
