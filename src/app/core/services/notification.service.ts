import { Injectable } from '@angular/core';
import { ReactiveService } from '../patterns/reactive-service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Command, CommandStatus } from '../patterns/command';
import { Notification } from '../interfaces/notification';


@Injectable()
export class NotificationService implements ReactiveService<Notification | null>{

  private notification$ = new BehaviorSubject<Notification | null>(null)
  data$: Observable<Notification | null> = this.notification$.asObservable();

  execute(command: Command): Observable<CommandStatus> {

    switch (command.type) {
      case 'CREATE':
        this.notification$.next( {level:'warning', message:command.payload });
        break;
      case 'DELETE':
      default:
        this.notification$.next(null);
        break;
    }

    return of({
      status:'ACCEPTED',
      message:'Notification Updated'
    })

  }

}
