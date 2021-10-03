import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RepositoryRoutingModule } from './repository-routing.module';
import { RepositoryCardComponent } from './repository-card/repository-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [RepositoryListComponent, RepositoryCardComponent],
  imports: [
    CommonModule,
    RepositoryRoutingModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDividerModule,
  ],
})
export class RepositoryModule {}
