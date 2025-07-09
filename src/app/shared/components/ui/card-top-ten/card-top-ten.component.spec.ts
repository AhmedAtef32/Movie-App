import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTopTenComponent } from './card-top-ten.component';

describe('CardTopTenComponent', () => {
  let component: CardTopTenComponent;
  let fixture: ComponentFixture<CardTopTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTopTenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTopTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
