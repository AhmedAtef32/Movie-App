import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesMainSliderComponent } from './series-main-slider.component';

describe('SeriesMainSliderComponent', () => {
  let component: SeriesMainSliderComponent;
  let fixture: ComponentFixture<SeriesMainSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesMainSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesMainSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
