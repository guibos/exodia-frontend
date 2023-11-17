import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {ProductBasic} from "../../classes/card/product-basic/product-basic";
import {EventType} from "../../../../shared/events/enums/event-type";
import {CardService} from "../../services/card/card.service";
import {HttpParams} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";


@Component({
  selector: 'app-inserts',
  templateUrl: './inserts.component.html',
  styleUrls: ['./inserts.component.css']
})
export class InsertsComponent implements OnInit {
  eventTypes = [EventType.WeissSchwarz]
  form: FormGroup = new FormGroup({
    "deck": new FormArray([])
  });

  productsCardRarity: ProductBasic[] = []

  constructor(private fb: FormBuilder, private cardService: CardService) {

  }

  ngOnInit() {
    this.insertPlaySet(0)
    this.cardService.getProductsCardRarity().subscribe(res => {
      this.productsCardRarity = res
    })
  }

  public insertPlaySet(index: number) {
    const deck = this.form.controls["deck"] as FormArray;

    deck.insert(index, this.fb.group({
      id: null,
      quantity: 1,
    }));
  }

  public removePlaySet(index: number) {

    const deck = this.form.controls["deck"] as FormArray;

    deck.removeAt(index)
  }

  public submit(): void {
    let params = new HttpParams()

    for (let deck of this.form.value.deck) {
      params = params.append(deck.id, deck.quantity)
    }
    window.location.href = `${environment.weissSchwarz.insertsURL}?${params.toString()}`

  }
}
