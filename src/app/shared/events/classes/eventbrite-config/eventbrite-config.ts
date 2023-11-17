import {LDOrganizer} from "../ld-organizer/ld-organizer";
import {LDPerformer} from "../ld-performer/ld-performer";
import {LDLocation} from "../ld-location/ld-location";

export class EventbriteConfig {
  constructor(
    public organization: string,
    public token: string,
    public performer: LDPerformer[],
    public organizer: LDOrganizer[],
    public location: LDLocation[]
  ) {
  }

}
