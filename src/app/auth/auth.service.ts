import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsersService } from '../users/users.service';

export interface LoginRequest {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  constructor(private readonly http: HttpClient, private readonly users: UsersService) {
    users.findByTag('me').subscribe(
      () => this.isLoggedIn = true,
      () => this.isLoggedIn = false,
    );
  }

  validateEmail(email: string, token: string): Observable<any> {
    return this.http.post('auth/email-validation', { email, token });
  }

  login(body: LoginRequest) {
    return this.http.post('auth', body)
      .pipe(tap(() => this.isLoggedIn = true));
  }
}
