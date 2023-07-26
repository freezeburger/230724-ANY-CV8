import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductForm, ProductPayload } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-product-creation-form',
  templateUrl: './product-creation-form.component.html',
  styleUrls: ['./product-creation-form.component.scss']
})
export class ProductCreationFormComponent {

  productForm = new FormGroup<ProductForm>({
    title:new FormControl(''),
    brand:new FormControl(''),
    category:new FormControl('misc'),
    description:new FormControl(''),
    price:new FormControl(0),
    stock:new FormControl(0)
  })

}
