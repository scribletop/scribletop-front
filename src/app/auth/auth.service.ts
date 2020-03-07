import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {
  }

  isLoggedIn() {
    return false;
  }

  validateEmail(email: string, token: string): Observable<any> {
    return this.http.post('/auth/email-validation', { email, token });
  }
}
