import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post<any>(this.apiUrl + 'register', user);
  }

  login(user: any) {
    return this.http.post<any>(this.apiUrl + 'login', user);
  }

  logout() {
    // remove user from local storage or session storage
  }
}
