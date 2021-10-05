import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'https://api.github.com';

  private userSubject = new BehaviorSubject<string>('vade123');
  user$ = this.userSubject.asObservable();

  constructor(private readonly http: HttpClient) {
    const user = localStorage.getItem('user') || 'vade123';
    this.userSubject.next(user);
  }

  setUser(newUser: string): void {
    localStorage.setItem('user', newUser);
    this.userSubject.next(newUser);
  }

  checkIfExists(username: string): Observable<HttpEvent<User>> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/vnd.github.v3+json',
        Accept: 'application/json',
      }),
      observe: 'response' as 'response', // dealing with ts(2769) error
    };

    return this.http.get<User>(`${this.baseUrl}/users/${username}`, options);
  }
}
