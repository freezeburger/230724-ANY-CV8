
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { NOTIFIER } from '../core/tokens/notifier.token';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent {

  notificationService = inject(NOTIFIER);

  /* constructor(){
   console.log('constructor')

   setInterval( () => this.tick(), 2000)
 }

 ngOnChanges(){
   console.log('ngOnChanges')
 }

 ngOnInit(){
   console.log('ngOnInit')
 }

 ngDoCheck(){
   // console.log('ngDoCheck')
 }

 ngOnDestroy(){
   console.log('ngOnDestroy')
 }

 count = 0;
 tick(){
   this.count++;
 }*/
}
