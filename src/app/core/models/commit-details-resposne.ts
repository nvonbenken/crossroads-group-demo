import { Commit } from './commit';
import { File } from './file';
import { Parent } from './parent';
import { Stats } from './stats';

export interface CommitDetailsResposne {
  sha: string;
  node_id: string;
  commit: Commit;
  url: string;
  html_url: string;
  comments_url: string;
  author?: any;
  committer?: any;
  parents: Parent[];
  stats: Stats;
  files: File[];
}
