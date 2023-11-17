import {TestBed} from '@angular/core/testing';

import {GymkhanaService} from './gymkhana.service';

describe('GymkhanaService', () => {
  let service: GymkhanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymkhanaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
