import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLoginComponent } from '../views/view-login/view-login.component';
import { ViewProductCatalogComponent } from '../views/view-product-catalog/view-product-catalog.component';
import { ViewProfileComponent } from '../views/view-profile/view-profile.component';
import { ViewNotFoundComponent } from '../views/view-not-found/view-not-found.component';
import { profileGuard } from '../core/guards/profile.guard';

const routes: Routes = [
  {
    path: 'auth', // http://localhost:4200/auth
    component: ViewLoginComponent,
  },
  {
    path: 'products', // http://localhost:4200/products
    component: ViewProductCatalogComponent,
    loadChildren:() => import('../domains/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'profile', // http://localhost:4200/profile
    component: ViewProfileComponent,
    canActivate:[profileGuard]
  },
  {
    path: '404', // http://localhost:4200/404
    component: ViewNotFoundComponent
  },
  {
    path: '**', // http://localhost:4200/**
    redirectTo:'404',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
