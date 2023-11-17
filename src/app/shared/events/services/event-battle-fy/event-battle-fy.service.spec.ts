import {TestBed} from '@angular/core/testing';

import {EventBattleFyService} from './event-battle-fy.service';
import {HttpClientModule} from "@angular/common/http";

describe('EventBattleFyServiceService', () => {
  let service: EventBattleFyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(EventBattleFyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return events', () => {
    service.get_events()
  })
});
