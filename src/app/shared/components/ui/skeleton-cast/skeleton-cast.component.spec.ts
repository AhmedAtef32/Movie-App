import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonCastComponent } from './skeleton-cast.component';

describe('SkeletonCastComponent', () => {
  let component: SkeletonCastComponent;
  let fixture: ComponentFixture<SkeletonCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonCastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
