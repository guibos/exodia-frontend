import {LDType} from "../../enums/ld-type";

export class LDOrganizer {
  constructor(
    public type: LDType,
    public name: string,
    public url: string,
    public image: string | null = null,
  ) {
  }

  public toJSONLD(): object {
    return {
      "@type": this.type,
      "name": this.name,
      "url": this.url
    }
  }

}
