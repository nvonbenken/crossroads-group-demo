import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { CommitResponse } from './core/models/commit-response';
import { CommitDetailsResposne } from './core/models/commit-details-resposne';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private _githubApiBase = 'https://api.github.com/';

  constructor(private _http: HttpClient) {}

  getCommits(): Observable<CommitResponse[]> {
    return this._http
      .get<CommitResponse[]>(
        `${this._githubApiBase}repos/nvonbenken/crossroads-group-demo/commits`
      )
      .pipe(catchError(this.handleError));
  }

  getCommitDetails(commitSha: string): Observable<CommitDetailsResposne> {
    return this._http
      .get<CommitDetailsResposne>(
        `${this._githubApiBase}repos/nvonbenken/crossroads-group-demo/commits/${commitSha}`
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
