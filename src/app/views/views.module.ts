import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { LayoutsModule } from '../layouts/layouts.module';

import {
  ViewLoginComponent,
  ViewNotFoundComponent,
  ViewProductCatalogComponent,
  ViewProfileComponent
} from './view-components';

@NgModule({
  declarations: [
    ViewLoginComponent,
    ViewProductCatalogComponent,
    ViewProfileComponent,
    ViewNotFoundComponent
  ],
  imports: [
    SharedModule,
    LayoutsModule
  ],
  exports: [
    ViewLoginComponent,
    ViewProductCatalogComponent,
    ViewProfileComponent,
    ViewNotFoundComponent
  ]
})
export class ViewsModule { }
