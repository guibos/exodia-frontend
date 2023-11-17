import {LDType} from "../../enums/ld-type";


export class LDAddress {
  constructor(
    public streetAddress: string,
    public addressLocality: string,
    public postalCode: string,
    public addressRegion: string,
    public addressCountry: string,
    public type: LDType = LDType.postalAddress
  ) {
  }

  public toJSONLD(): object {
    return {
      "@type": this.type.valueOf(),
      "streetAddress": this.streetAddress,
      "addressLocality": this.addressLocality,
      "postalCode": this.postalCode,
      "addressRegion": this.addressRegion,
      "addressCountry": this.addressCountry,
    }
  }
}
