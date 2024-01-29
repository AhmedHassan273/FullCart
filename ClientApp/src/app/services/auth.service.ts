import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'oidc-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean = false;
  private baseUrl: string = environment.apiUrl + 'User';

  constructor(private http: HttpClient) {}

  get isLoggedIn(): boolean {
    return this.loggedIn;
  }

  signUp(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/Register`, user);
  }

  signIn(user: User): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/Authenticate`, user);
  }
}
