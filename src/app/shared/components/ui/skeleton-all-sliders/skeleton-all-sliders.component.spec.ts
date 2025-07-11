import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonAllSlidersComponent } from './skeleton-all-sliders.component';

describe('SkeletonAllSlidersComponent', () => {
  let component: SkeletonAllSlidersComponent;
  let fixture: ComponentFixture<SkeletonAllSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonAllSlidersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonAllSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
