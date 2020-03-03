import { firestore } from 'firebase';
export interface Comment {
  id?: string;
  parentId?: string;
  content?: string;
  timestamp?: firestore.Timestamp;
}
