import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { README } from '../shared/repository.model';
import { RepositoryService } from '../shared/repository.service';

@Component({
  selector: 'app-repository-readme',
  templateUrl: './repository-readme.component.html',
  styleUrls: ['./repository-readme.component.scss'],
})
export class RepositoryReadmeComponent {
  readme$: Observable<README>;
  content: any;
  constructor(
    private repositoryService: RepositoryService,
    @Inject(MAT_DIALOG_DATA) public data: { user: string; repo: string }
  ) {
    this.readme$ = this.repositoryService.getReadMe(data.user, data.repo);
  }

  // https://stackoverflow.com/a/30106551/13014753
  b64DecodeUnicode(str: string) {
    return decodeURIComponent(
      Array.prototype.map
        .call(atob(str), (c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
  }
}
