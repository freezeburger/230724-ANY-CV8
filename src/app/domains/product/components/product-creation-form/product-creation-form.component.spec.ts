import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreationFormComponent } from './product-creation-form.component';

describe('ProductCreationFormComponent', () => {
  let component: ProductCreationFormComponent;
  let fixture: ComponentFixture<ProductCreationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCreationFormComponent]
    });
    fixture = TestBed.createComponent(ProductCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
