import { TextShort } from "./generics";

export interface Notification{
  level: 'info' | 'warning';
  message:TextShort
}
