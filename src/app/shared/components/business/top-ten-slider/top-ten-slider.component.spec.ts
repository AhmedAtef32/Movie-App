import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenSliderComponent } from './top-ten-slider.component';

describe('TopTenSliderComponent', () => {
  let component: TopTenSliderComponent;
  let fixture: ComponentFixture<TopTenSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopTenSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopTenSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
