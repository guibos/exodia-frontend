import {Component, OnInit} from '@angular/core';
import {CardService} from "../../services/card/card.service";
import {ProductBasic} from "../../classes/card/product-basic/product-basic";
import {EventType} from "../../../../shared/events/enums/event-type";
import {environment} from "../../../../../environments/environment";


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  title = $localize`:@@album-placeholder:Album placeholder`;
  eventTypes = [EventType.WeissSchwarz]
  maxEvents = 1;

  productSelected = '';
  products: ProductBasic[] = []

  constructor(private cardService: CardService) {

  }

  ngOnInit() {
    this.cardService.getProducts().subscribe(res => {
      this.products = res
    })
  }

  submit() {
    window.location.href = `${environment.weissSchwarz.albumURL}?products=${this.productSelected}`
  }
}
