import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RepositoryRoutingModule } from './repository-routing.module';

@NgModule({
  declarations: [RepositoryListComponent],
  imports: [CommonModule, RepositoryRoutingModule],
})
export class RepositoryModule {}
