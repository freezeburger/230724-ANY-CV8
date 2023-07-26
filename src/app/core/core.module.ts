import { NgModule } from '@angular/core';
import { ProductService } from './services/product.service';
import { NotificationService } from './services/notification.service';
import { NOTIFIER } from './tokens/notifier.token';


@NgModule({
  providers:[
    ProductService,
    NotificationService,
    {
      provide:NOTIFIER,
      /*
      useValue
      useClass
      useFactory
      */
      useExisting:NotificationService
    }
  ]
})
export class CoreModule {
  //productService = inject(ProductService)
}
