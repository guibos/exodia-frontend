import {LDOrganizer} from "../ld-organizer/ld-organizer";

export class LDEventBadge {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public organizer: LDOrganizer,
    public points: number,
    public image: string,
  ) {
  }
}
