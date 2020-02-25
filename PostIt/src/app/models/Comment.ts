import { Time } from "@angular/common";
export interface Comment {
	id: string;
	parent: string
    content?: string;
    timestamp: Time;
  }
  
