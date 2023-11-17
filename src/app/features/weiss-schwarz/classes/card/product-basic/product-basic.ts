import {CardRarityBasic} from "../card-rarity-basic/card-rarity-basic";

export class ProductBasic {
  constructor(
    public id: number,
    public name: string,
    public cardRarities: CardRarityBasic[]
  ) {
  }
}
