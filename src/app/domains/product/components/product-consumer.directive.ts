import { Directive, inject } from '@angular/core';
import { UniqueId } from 'src/app/core/interfaces/generics';
import { Product, ProductMandatoryKeys } from 'src/app/core/interfaces/product';
import { ProductService } from 'src/app/core/services/product.service';

@Directive({
  selector: '[appProductConsumer]'
})
export class ProductConsumerDirective {

  productService = inject(ProductService); // Angular 14

  constructor(
    // @Inject(ProductService) public productService:ProductService
    // public productService:ProductService
  ){}

  getProducts(){
    return this.productService.execute({type:'READ',payload:null});
  }

  createProduct( product:ProductMandatoryKeys ){
    return this.productService.execute({type:'CREATE', payload:product });
  }

  deleteProduct( id:Product['id'] ){
    return this.productService.execute({type:'DELETE',payload:id});
  }

}
