import {LDType} from "../../enums/ld-type";

export class LDPerformer {
  constructor(
    public type: LDType,
    public name: string,
  ) {
  }

  public toJSONLD(): object {
    return {
      "@type": this.type.valueOf(),
      "name": this.name
    }
  }
}
