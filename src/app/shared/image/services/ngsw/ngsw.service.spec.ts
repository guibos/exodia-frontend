import {TestBed} from '@angular/core/testing';

import {NgswService} from './ngsw.service';

describe('NgswService', () => {
  let service: NgswService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgswService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
