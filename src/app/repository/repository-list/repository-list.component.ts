import { Component } from '@angular/core';
import { Repository } from '../shared/repository.model';
import { RepositoryService } from '../shared/repository.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
})
export class RepositoryListComponent {
  repositories: Repository[] = [];

  constructor(private repositoryService: RepositoryService) {
    this.fetchRepositories();
  }

  fetchRepositories(): void {
    this.repositoryService.getRepositories().subscribe((repos) => {
      this.repositories = repos;
    });
  }
}
