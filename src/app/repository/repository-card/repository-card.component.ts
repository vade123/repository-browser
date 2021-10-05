import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RepositoryReadmeComponent } from '../repository-readme/repository-readme.component';
import { Repository } from '../shared/repository.model';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss'],
})
export class RepositoryCardComponent {
  @Input() repository!: Repository;
  @Input() user!: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(RepositoryReadmeComponent, {
      data: { user: this.user, repo: this.repository.name },
    });
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
