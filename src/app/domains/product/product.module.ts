import { NgModule } from '@angular/core';

import {
  ProductConsumerDirective,
  ProductCreationFormComponent,
  ProductDetailComponent,
  ProductFilterComponent,
  ProductListComponent,
  ProductListItemComponent,
  ProductSearchComponent
} from './components';

import {
  ProductViewCreationComponent,
  ProductViewDetailComponent,
  ProductViewListComponent
} from './views';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    ProductCreationFormComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    ProductFilterComponent,
    ProductConsumerDirective,
    ProductViewListComponent,
    ProductViewDetailComponent,
    ProductViewCreationComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  exports: [
    ProductListComponent,
    ProductListItemComponent,
    ProductCreationFormComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    ProductFilterComponent,
    ProductViewListComponent,
    ProductViewDetailComponent,
    ProductViewCreationComponent
  ]
})
export class ProductModule { }
