import { Component } from '@angular/core';

@Component({
  selector: 'app-product-view-list',
  template: `
    <section>
      <app-product-search></app-product-search>
      <app-product-filter></app-product-filter>
      <app-product-list></app-product-list>
    </section>
  `,
  styles: [
  ]
})
export class ProductViewListComponent {

}
