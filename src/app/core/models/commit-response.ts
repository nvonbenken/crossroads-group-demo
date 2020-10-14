import { Commit } from './commit';
import { Parent } from './parent';

export interface CommitResponse {
  sha: string;
  node_id: string;
  commit: Commit;
  url: string;
  html_url: string;
  comments_url: string;
  author?: any;
  committer?: any;
  parents: Parent[];
}
