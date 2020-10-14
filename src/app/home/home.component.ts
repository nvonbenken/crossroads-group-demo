import { Component, OnInit } from '@angular/core';

import { GithubService } from '../github.service';
import { CommitResponse } from '../core/models/commit-response';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  commitResponses: CommitResponse[];

  constructor(private _githubService: GithubService) {}

  ngOnInit() {
    this.getCommits();
  }

  getCommits(): void {
    this._githubService.getCommits().subscribe((commitResponses) => {
      this.commitResponses = commitResponses;
    });
  }
}
