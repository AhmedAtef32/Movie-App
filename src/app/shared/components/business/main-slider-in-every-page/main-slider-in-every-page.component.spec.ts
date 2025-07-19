import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSliderInEveryPageComponent } from './main-slider-in-every-page.component';

describe('MainSliderInEveryPageComponent', () => {
  let component: MainSliderInEveryPageComponent;
  let fixture: ComponentFixture<MainSliderInEveryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSliderInEveryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSliderInEveryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
