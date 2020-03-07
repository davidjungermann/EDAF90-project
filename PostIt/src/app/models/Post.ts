import { firestore } from 'firebase';
export interface Post {
  id?: string;
  title?: string;
  content?: string;
  timestamp?: firestore.Timestamp;
  topic?: string;
  username?: string;
  uid?: string;
  points?: number;
  voters?: string[];
}
