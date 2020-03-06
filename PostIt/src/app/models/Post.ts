import { firestore } from 'firebase';
export interface Post {
  id?: string;
  title?: string;
  content?: string;
  timestamp?: firestore.Timestamp;
  points?: number;
  topic?: string;
  username?: string;
  uid?: string
}
