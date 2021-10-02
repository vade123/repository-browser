import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryListComponent } from './repository-list/repository-list.component';

const repositoryRoutes: Routes = [
  {
    path: '',
    component: RepositoryListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(repositoryRoutes)],
  exports: [RouterModule],
})
export class RepositoryRoutingModule {}
