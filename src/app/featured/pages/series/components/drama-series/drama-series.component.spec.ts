import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaSeriesComponent } from './drama-series.component';

describe('DramaSeriesComponent', () => {
  let component: DramaSeriesComponent;
  let fixture: ComponentFixture<DramaSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DramaSeriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DramaSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
