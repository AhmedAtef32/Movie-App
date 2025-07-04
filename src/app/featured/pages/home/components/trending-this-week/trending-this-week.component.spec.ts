import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingThisWeekComponent } from './trending-this-week.component';

describe('TrendingThisWeekComponent', () => {
  let component: TrendingThisWeekComponent;
  let fixture: ComponentFixture<TrendingThisWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingThisWeekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingThisWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
