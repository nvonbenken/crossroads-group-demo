import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CommitDetailsResposne } from 'src/app/core/models/commit-details-resposne';
import { GithubService } from '../../github.service';

@Component({
  selector: 'app-commit-modal',
  templateUrl: './commit-modal.component.html',
  styleUrls: ['./commit-modal.component.scss'],
})
export class CommitModalComponent implements OnInit {
  @Input() sha: string;

  commitDetails: CommitDetailsResposne;

  constructor(
    public activeModal: NgbActiveModal,
    private _githubService: GithubService
  ) {}

  ngOnInit(): void {
    this._githubService
      .getCommitDetails(this.sha)
      .subscribe((commitDetails) => {
        console.log(commitDetails);
        this.commitDetails = commitDetails;
      });
  }
}
