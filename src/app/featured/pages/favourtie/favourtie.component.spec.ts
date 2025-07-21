import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavourtieComponent } from './favourtie.component';

describe('FavourtieComponent', () => {
  let component: FavourtieComponent;
  let fixture: ComponentFixture<FavourtieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavourtieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavourtieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
