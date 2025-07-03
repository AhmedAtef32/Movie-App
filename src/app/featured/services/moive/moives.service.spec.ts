import { TestBed } from '@angular/core/testing';

import { MoivesService } from './moives.service';

describe('MoivesService', () => {
  let service: MoivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
