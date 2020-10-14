import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GithubService } from '../github.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommitGridComponent } from './commit-grid/commit-grid.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeComponent, CommitGridComponent],
  providers: [GithubService],
})
export class HomeModule {}
