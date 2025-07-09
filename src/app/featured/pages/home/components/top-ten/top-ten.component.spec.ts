import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenComponent } from './top-ten.component';

describe('TopTenComponent', () => {
  let component: TopTenComponent;
  let fixture: ComponentFixture<TopTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopTenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
