import {LDType} from "../../enums/ld-type";
import {LDAddress} from "../ld-address/ld-address";

export class LDLocation {
  constructor(
    public name: string,
    public address: LDAddress,
    public url: string,
    public type: LDType,
  ) {
  }

  toJSONLD(): object {
    return {
      "@type": this.type.valueOf(),
      "name": this.name,
      "address": this.address.toJSONLD(),
      "url": this.url
    }
  }
}
