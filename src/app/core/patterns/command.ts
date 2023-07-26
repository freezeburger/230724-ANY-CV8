/**
 * Normalized Instructions
 */

import { Observable } from "rxjs";

export interface Command{
  type:'CREATE' | 'UPDATE' | 'DELETE' | 'READ',
  payload:any
}

export interface CommandStatus{
  status:'ACCEPTED' | 'REJECTED',
  message:string
}

export interface Commandable{
  /**
   * Normalized Instruction Meesage
   * @param command
   */
  execute(command:Command):Observable<CommandStatus>;
}
