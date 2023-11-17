import {JSONLDService} from "../../../linked-data/services/json-ld/json-ld.service";
import {Directive} from "@angular/core";

@Directive()
export class LinkedDataBase {
  constructor(
    private jsonldService: JSONLDService
  ) {
  }

  ngOnInit(): void {
    this.jsonldService.insertSchema()
  }
}
