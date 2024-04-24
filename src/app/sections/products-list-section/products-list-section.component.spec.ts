import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListSectionComponent } from './products-list-section.component';

describe('ProductsListSectionComponent', () => {
  let component: ProductsListSectionComponent;
  let fixture: ComponentFixture<ProductsListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsListSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
