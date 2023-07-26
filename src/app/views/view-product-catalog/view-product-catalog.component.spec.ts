import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductCatalogComponent } from './view-product-catalog.component';

describe('ViewProductCatalogComponent', () => {
  let component: ViewProductCatalogComponent;
  let fixture: ComponentFixture<ViewProductCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProductCatalogComponent]
    });
    fixture = TestBed.createComponent(ViewProductCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
