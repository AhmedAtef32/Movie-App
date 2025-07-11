import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonMainSliderComponent } from './skeleton-main-slider.component';

describe('SkeletonMainSliderComponent', () => {
  let component: SkeletonMainSliderComponent;
  let fixture: ComponentFixture<SkeletonMainSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonMainSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonMainSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
