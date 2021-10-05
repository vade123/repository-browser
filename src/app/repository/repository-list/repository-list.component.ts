import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

import { Repository } from '../shared/repository.model';
import { RepositoryService } from '../shared/repository.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
})
export class RepositoryListComponent implements OnDestroy {
  repositories$!: Observable<Repository[]>;
  user!: string;
  private userSubscription: Subscription;

  constructor(private repositoryService: RepositoryService, private userService: UserService) {
    this.userSubscription = this.userService.user$.subscribe((user) => {
      this.repositories$ = this.repositoryService.getRepositories(user);
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
