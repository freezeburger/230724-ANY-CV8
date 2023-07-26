import { Injectable, inject } from "@angular/core";
import { Resolve, ResolveFn } from "@angular/router";
import { Observable, filter, of, skip, takeLast, switchMap, delay } from "rxjs";
import { Product } from "src/app/core/interfaces/product";
import { ProductService } from "src/app/core/services/product.service";

/* @Injectable({
  providedIn:'root'
})
export class ProductResolver implements Resolve<Product[]> {

  productService = inject(ProductService)

  resolve(): Observable<Product[]> {
    return this.productService.data$.pipe(skip(1))
  }
}
 */


export const ProductResolver:ResolveFn<Product[]> = () => {
  const productService = inject(ProductService)
  return productService.data$.pipe(delay(300))
}
