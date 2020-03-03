import { firestore } from 'firebase';
export interface Comment {
  id?: string;
  parent?: string;
  content?: string;
  timestamp?: firestore.Timestamp;
}
