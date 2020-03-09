import { firestore } from 'firebase';
import { Vote } from './Vote';
export interface Post {
  id?: string;
  title?: string;
  content?: string;
  timestamp?: firestore.Timestamp;
  topic?: string;
  username?: string;
  uid?: string;
  votes?: Vote[];
}
