import {TestBed} from '@angular/core/testing';

import {EventEventbriteService} from './event-eventbrite.service';

describe('EventEventbriteService', () => {
  let service: EventEventbriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventEventbriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
