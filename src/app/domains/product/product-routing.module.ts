import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewListComponent } from './views/product-view-list.component';
import { ProductViewDetailComponent } from './views/product-view-detail.component';
import { ProductViewCreationComponent } from './views/product-view-creation.component';
import { ProductResolver } from './resolvers/product.resolver';


const routes: Routes = [
  {
    path:'list',
    component:ProductViewListComponent,
    resolve:{
      list:ProductResolver
    }
  },
  {
    path:'detail',
    component:ProductViewDetailComponent
  },
  {
    path:'creation',
    component:ProductViewCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
