import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";
import {gql} from "@apollo/client/core";
import {Apollo} from "apollo-angular";
import {CardRarityBasic} from "../../classes/card/card-rarity-basic/card-rarity-basic";
import {ProductBasic} from "../../classes/card/product-basic/product-basic";


@Injectable({
  providedIn: 'root'
})
export class CardService {
  CARD_LIST = gql`
    query{
        products {
            id,
            name,
            cards {
                name,
                cardId,
                cardRarities{
                    id,
                    cardNumberPhysical,
                    rarity{
                        code
                        }
                }
            }
        }
    }`
  PRODUCT_LIST = gql`
      query{
          products {
              id,
              name,
          }
      }`

  constructor(private sanitizer: DomSanitizer, private apollo: Apollo) {
  }

  getProducts(): Observable<ProductBasic[]> {
    return this.apollo.use('weiss').watchQuery<any>({query: this.PRODUCT_LIST}).valueChanges.pipe(
      map(res => _getProductParser(res.data.products))
    )
  }

  getProductsCardRarity(): Observable<ProductBasic[]> {
    return this.apollo.use('weiss').watchQuery<any>({query: this.CARD_LIST}).valueChanges.pipe(
      map(res => _getProductParser(res.data.products))
    )
  }
}

function _getProductParser(products: any[]): ProductBasic[] {
  let instances: ProductBasic[] = []
  let product: ProductBasic
  for (product of products) {
    instances.push(_releaseBasicParser(product))
  }
  return instances
}

function _releaseBasicParser(product: any): ProductBasic {
  let card: any
  let cardRarity: any
  let cardRarities: any[] = []

  for (card of product.cards || []) {
    for (cardRarity of card.cardRarities) {
      cardRarities.push(new CardRarityBasic(
        cardRarity.id,
        card.cardId,
        cardRarity.cardNumberPhysical,
        cardRarity.rarity.code,
        card.name,
      ))
    }
  }

  return new ProductBasic(
    product.id,
    product.name,
    cardRarities
  )
}



