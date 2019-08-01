import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  userLogin(login) {
    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/login', login);
      // .pipe(map((res: Response) => res.json));
  }
}
