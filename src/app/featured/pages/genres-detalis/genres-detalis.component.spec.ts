import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresDetalisComponent } from './genres-detalis.component';

describe('GenresDetalisComponent', () => {
  let component: GenresDetalisComponent;
  let fixture: ComponentFixture<GenresDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenresDetalisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenresDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
