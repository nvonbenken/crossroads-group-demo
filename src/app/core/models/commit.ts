import { Author } from './author';
import { Committer } from './committer';
import { Tree } from './tree';
import { Verification } from './verification';

export interface Commit {
  author: Author;
  committer: Committer;
  message: string;
  tree: Tree;
  url: string;
  comment_count: number;
  verification: Verification;
}
