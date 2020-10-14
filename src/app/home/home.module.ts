import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GithubService } from '../github.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommitGridComponent } from './commit-grid/commit-grid.component';
import { CommitModalComponent } from './commit-modal/commit-modal.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, NgbModule],
  declarations: [HomeComponent, CommitGridComponent, CommitModalComponent],
  providers: [GithubService],
})
export class HomeModule {}
