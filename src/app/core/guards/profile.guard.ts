import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { delay, expand, switchMap, take, timer } from 'rxjs';
import { NOTIFIER } from '../tokens/notifier.token';

export const profileGuard: CanActivateFn = (route, state) => {

  const notificationService = inject(NOTIFIER);

  /* notificationService.execute({
    type: 'CREATE',
    payload: 'You need to be connected'
  })
  .pipe( delay(2000) ).subscribe(
    () => notificationService.execute({type:'DELETE',payload:null})
  ) */

  const notify$ = () => notificationService.execute({
    type: 'CREATE',
    payload: 'You need to be connected'
  })

  const cancel$ = () => notificationService.execute({ type: 'DELETE', payload: null })

  timer(0, 2000)
    .pipe(
      take(3),
      // tap(console.log),
      switchMap(notify$),
      // tap(console.log),
      delay(1500),
      switchMap(cancel$)
    )
    .subscribe()

  return false;
};
