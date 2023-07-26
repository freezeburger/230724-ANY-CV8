import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewCreationComponent } from './product-view-creation.component';

describe('ProductViewCreationComponent', () => {
  let component: ProductViewCreationComponent;
  let fixture: ComponentFixture<ProductViewCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductViewCreationComponent]
    });
    fixture = TestBed.createComponent(ProductViewCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
