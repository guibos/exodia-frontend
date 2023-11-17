import {LDPerformer} from "../ld-performer/ld-performer";
import {LDOrganizer} from "../ld-organizer/ld-organizer";
import {LDLocation} from "../ld-location/ld-location";

export class BattleFyConfig {
  constructor(
    public organization: string,
    public performer: LDPerformer[],
    public organizer: LDOrganizer[],
    public location: LDLocation[]
  ) {
  }
}
