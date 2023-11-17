import {TestBed} from '@angular/core/testing';

import {JSONLDService} from './json-ld.service';

describe('JsonLdService', () => {
  let service: JSONLDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSONLDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
