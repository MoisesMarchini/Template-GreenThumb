import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureListSectionComponent } from './feature-list-section.component';

describe('FeatureListSectionComponent', () => {
  let component: FeatureListSectionComponent;
  let fixture: ComponentFixture<FeatureListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureListSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
