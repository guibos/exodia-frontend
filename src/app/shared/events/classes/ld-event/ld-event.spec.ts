import {LDEvent} from './ld-event';
import {EventType} from "../../enums/event-type";

describe('Event', () => {
  it('should create an instance', () => {
    expect(new LDEvent(
      'test',
      EventType.WeissSchwarz,
      new Date('2012-12-12'),
      1,
      'asdas'
    )).toBeTruthy();
  });
});
