import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonMovieOrSeriesDetailsComponent } from './skeleton-movie-or-series-details.component';

describe('SkeletonMovieOrSeriesDetailsComponent', () => {
  let component: SkeletonMovieOrSeriesDetailsComponent;
  let fixture: ComponentFixture<SkeletonMovieOrSeriesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonMovieOrSeriesDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonMovieOrSeriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
