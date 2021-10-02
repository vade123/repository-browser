import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from './repository.model';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  private baseUrl = 'https://api.github.com';
  constructor(private readonly http: HttpClient) {}

  getRepositories(): Observable<Repository[]> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/vnd.github.v3+json',
        Accept: 'application/json',
      }),
    };

    return this.http.get<Repository[]>(`${this.baseUrl}/users/vade123/repos`, options);
  }
}
