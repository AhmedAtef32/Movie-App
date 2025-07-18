import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOneMovieComponent } from './card-one-movie.component';

describe('CardOneMovieComponent', () => {
  let component: CardOneMovieComponent;
  let fixture: ComponentFixture<CardOneMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOneMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOneMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
