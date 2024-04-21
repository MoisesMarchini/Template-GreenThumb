import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderImgWrapperComponent } from './placeholder-img-wrapper.component';

describe('PlaceholderImgWrapperComponent', () => {
  let component: PlaceholderImgWrapperComponent;
  let fixture: ComponentFixture<PlaceholderImgWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceholderImgWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceholderImgWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
