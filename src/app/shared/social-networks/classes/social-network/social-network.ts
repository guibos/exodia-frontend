import {SocialNetworkType} from "../../enums/social-network-type";

export class SocialNetwork {
  constructor(
    public name: string,
    public url: string | null,
    public link: string | null,
    public fragment: string | null,
    public type: SocialNetworkType,
    public imageUrl: string,
    public imageDataUrl: string | null,
  ) {
  }

  get hot(): boolean {
    return this.type === SocialNetworkType.preferred;
  }

  get description(): string {
    if (this.type == SocialNetworkType.preferred) {
      return $localize`:@@contact.preferred:Preferred way to contact us.`
    } else if (this.type == SocialNetworkType.restricted) {
      return $localize`:@@contact.restricted:Restricted social network.`
    } else if (this.type == SocialNetworkType.activities) {
      return $localize`:@@contact.activities:Activities network.`
    }
    return $localize`:@@contact.Unknown:Unknown social network.`
  }

}
