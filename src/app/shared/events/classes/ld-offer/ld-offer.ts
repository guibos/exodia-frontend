import {LdOfferAvailability} from "../../enums/ld-offer-availability";
import {LDType} from "../../enums/ld-type";

export class LDOffer {
  constructor(
    public availability: LdOfferAvailability,
    public url: string,
    public price: number,
    public priceCurrency: string,
    public validFrom: Date,
    public type: LDType = LDType.offer
  ) {
  }

  public toJSONLD(): object {
    return {
      "@type": this.type.valueOf(),
      "url": this.url,
      "price": this.price,
      "priceCurrency": this.priceCurrency,
      "validFrom": this.validFrom.toISOString(),
      "availability": this.availability.valueOf()
    }
  }

}
