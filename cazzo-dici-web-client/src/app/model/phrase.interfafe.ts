import {User} from './user.interface';
import {Comment} from './comment.interface';

export interface Phrase {
  id: number;
  value: string;
  context: string;
  date: Date;
  owner: User;
  createdBy: User;
  volumeId: number;
  comments: Comment[];
}
