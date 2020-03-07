import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface LoginRequest {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  constructor(private readonly http: HttpClient) {
  }

  validateEmail(email: string, token: string): Observable<any> {
    return this.http.post('/auth/email-validation', { email, token });
  }

  login(body: LoginRequest) {
    return this.http.post('/auth/', body)
      .pipe(tap(() => this.isLoggedIn = true));
  }
}
