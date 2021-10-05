import { Component, Input } from '@angular/core';
import { Repository } from '../shared/repository.model';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss'],
})
export class RepositoryCardComponent {
  @Input() repository!: Repository;
  constructor() {}
}
