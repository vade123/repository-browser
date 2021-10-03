import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../shared/repository.model';
import { RepositoryService } from '../shared/repository.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
})
export class RepositoryListComponent {
  repositories$: Observable<Repository[]>;

  constructor(private repositoryService: RepositoryService) {
    this.repositories$ = this.repositoryService.getRepositories();
  }
}
