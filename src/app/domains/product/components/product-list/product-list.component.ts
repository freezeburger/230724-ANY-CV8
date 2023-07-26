import { Component } from '@angular/core';
import { ProductConsumerDirective } from '../product-consumer.directive';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent extends ProductConsumerDirective {

}
