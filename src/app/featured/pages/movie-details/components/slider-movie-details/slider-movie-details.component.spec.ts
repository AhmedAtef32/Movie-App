import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMovieDetailsComponent } from './slider-movie-details.component';

describe('SliderMovieDetailsComponent', () => {
  let component: SliderMovieDetailsComponent;
  let fixture: ComponentFixture<SliderMovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderMovieDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
