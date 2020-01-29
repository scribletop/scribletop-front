import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityBuilder } from '@decahedron/entity';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly http: HttpClient) {
  }

  create(body: CreateUserRequest): Observable<User> {
    return this.http.post('users/', body).pipe(
      map(response => EntityBuilder.buildOne(User, response)),
    );
  }
}
