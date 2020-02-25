import { Time } from "@angular/common";
export interface Post {
    id: string;
    title: string;
    content?: string;
    timestamp: Time;
    points: number;
  }
  