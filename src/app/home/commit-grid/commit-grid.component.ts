import { Component, Input, OnInit } from '@angular/core';

import { CommitResponse } from '../../core/models/commit-response';

@Component({
  selector: 'app-commit-grid',
  templateUrl: './commit-grid.component.html',
  styleUrls: ['./commit-grid.component.scss'],
})
export class CommitGridComponent implements OnInit {
  @Input() commitResponses: CommitResponse[];

  constructor() {}

  ngOnInit(): void {}

  handleRowClick(): void {}
}
