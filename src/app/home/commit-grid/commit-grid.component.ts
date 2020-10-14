import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CommitResponse } from '../../core/models/commit-response';
import { CommitModalComponent } from '../commit-modal/commit-modal.component';

@Component({
  selector: 'app-commit-grid',
  templateUrl: './commit-grid.component.html',
  styleUrls: ['./commit-grid.component.scss'],
})
export class CommitGridComponent implements OnInit {
  @Input() commitResponses: CommitResponse[];

  constructor(private _modalService: NgbModal) {}

  ngOnInit(): void {}

  handleRowClick(commitResponse: CommitResponse): void {
    const modal = this._modalService.open(CommitModalComponent, { size: 'lg' });
    const modalInstance = <CommitModalComponent>modal.componentInstance;
    modalInstance.sha = commitResponse.sha;
  }
}
