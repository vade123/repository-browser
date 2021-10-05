import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { README, Repository } from './repository.model';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  private baseUrl = 'https://api.github.com';

  private options = {};

  constructor(private readonly http: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/vnd.github.v3+json',
        Accept: 'application/json',
      }),
    };
  }

  getRepositories(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.baseUrl}/users/${username}/repos`, this.options);
  }

  getReadMe(username: string, repository: string): Observable<README> {
    return this.http.get<README>(`${this.baseUrl}/repos/${username}/${repository}/readme`, this.options);
  }
}
