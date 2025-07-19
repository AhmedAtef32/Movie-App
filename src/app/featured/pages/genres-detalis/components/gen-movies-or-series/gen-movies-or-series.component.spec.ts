import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenMoviesOrSeriesComponent } from './gen-movies-or-series.component';

describe('GenMoviesOrSeriesComponent', () => {
  let component: GenMoviesOrSeriesComponent;
  let fixture: ComponentFixture<GenMoviesOrSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenMoviesOrSeriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenMoviesOrSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
