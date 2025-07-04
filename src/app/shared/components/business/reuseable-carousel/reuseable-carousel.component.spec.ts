import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseableCarouselComponent } from './reuseable-carousel.component';

describe('ReuseableCarouselComponent', () => {
  let component: ReuseableCarouselComponent;
  let fixture: ComponentFixture<ReuseableCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseableCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReuseableCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
