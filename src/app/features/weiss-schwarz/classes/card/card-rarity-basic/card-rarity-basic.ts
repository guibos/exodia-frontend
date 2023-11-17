export class CardRarityBasic {
  constructor(
    public id: number,
    public cardId: number,
    public cardNumberPhysical: string,
    public rarity: string,
    private cardName: string,
  ) {
  }

  public searchName(): string {
    if (this.cardNumberPhysical) {
      return `${this.cardNumberPhysical} - ${this.cardName}`
    }
    return ''
  }
}
