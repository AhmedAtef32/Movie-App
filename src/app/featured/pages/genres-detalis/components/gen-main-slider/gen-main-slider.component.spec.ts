import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenMainSliderComponent } from './gen-main-slider.component';

describe('GenMainSliderComponent', () => {
  let component: GenMainSliderComponent;
  let fixture: ComponentFixture<GenMainSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenMainSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenMainSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
