import { NgModule } from '@angular/core';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';
import { CoreModule } from '../core/core.module';
import { ViewsModule } from '../views/views.module';

import { SharedModule } from '@shared';


@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    SharedModule,
    ShellRoutingModule,
    ViewsModule,
    CoreModule
  ],
  exports: [
    ShellComponent
  ]
})
export class ShellModule { }
