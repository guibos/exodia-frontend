import {Component, forwardRef, OnInit} from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    FormBuilder,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    Validator
} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Observable} from "rxjs";
import {ChangeCallbackFn} from "../../../../main/types/change-callback-fn";
import {TouchCallbackFn} from "../../../../main/types/touch-callback-fn";
import {CardService} from "../../../providers/card/card.service";
import {ProductBasic} from "../../../classes/product-basic/product-basic";
import {CardRarityBasic} from "../../../classes/card-rarity-basic/card-rarity-basic";


export const _filter = (opt: CardRarityBasic[], value: any): CardRarityBasic[] => {
    let filterValue: string = ''
    if (typeof value.selected === 'string') {
        filterValue = value.selected.toLowerCase();
    } else {
        filterValue = value.selected.searchName()
    }
    return opt.filter(item => item.searchName().toLowerCase().includes(filterValue));
};


const cardRarityValue = new Map<string, number>([
  ['PR', 13],
  ['SSP', 12],
  ['SP', 11],
  ['RRR', 9],
  ['SR', 8],
  ['RR+', 8],
  ['RR', 7],
  ['R', 6],
  ['U', 5],
  ['C', 4],
  ['CR', 3],
  ['CC', 2],
  ['TD', 1],
]);


@Component({
    selector: 'app-card-rarity-selector',
    templateUrl: './card-rarity-selector.component.html',
    styleUrls: ['./card-rarity-selector.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CardRaritySelectorComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => CardRaritySelectorComponent),
            multi: true
        }
    ]
})
export class CardRaritySelectorComponent implements OnInit,
    ControlValueAccessor, Validator {
    CardRarityForm = this._formBuilder.group({
        selected: this._formBuilder.control('', [validateCardRarity])
    });

    releases: ProductBasic[] = []

    stateGroupOptions: Observable<ProductBasic[]> | null = null;

    constructor(private _formBuilder: FormBuilder, private cardService: CardService) {
        this.cardService.getProductsCardRarity().subscribe(
            releases => {
                let release: ProductBasic
                this.releases = releases
                this.releases = this._filterGroup('')
                this.releases.sort(_sortReleases)

                for (release of this.releases) {
                    release.cardRarities.sort(_sortCardRarities)
                }

                this.stateGroupOptions = this.CardRarityForm.valueChanges.pipe(
                    startWith(''),
                    map(value => this._filterGroup(value || '')),
                )
            })

    }

    ngOnInit() {
    }

    public displayFn(cardRarity: CardRarityBasic | null | Function): string {
        if (cardRarity instanceof CardRarityBasic) {
            return cardRarity.searchName()
        }
        return ''
    }

    onTouched: () => void = () => {
    };

    validate(control: AbstractControl): ValidationErrors | null {
        if (this.CardRarityForm.valid) {
            return null;
        }
        return {invalidForm: {valid: false, message: 'CardRarityForm fields are invalid'}};
    }

    writeValue(val: any): void {
        if (val) {
            this.CardRarityForm.setValue(val, {emitEvent: false});
        }
    }

    registerOnChange(fn: ChangeCallbackFn<object>): void {
        this.CardRarityForm.valueChanges.subscribe(fn);

    }

    registerOnTouched(fn: TouchCallbackFn): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        if (isDisabled) {
            this.CardRarityForm.disable();
        } else {
            this.CardRarityForm.enable();
        }
    }

    private _filterGroup(value: string): ProductBasic[] {
        if (value) {
            return this.releases
                .map(group => ({
                    id: group.id,
                    name: group.name,
                    cardRarities: _filter(group.cardRarities, value)
                })).filter(group => group.cardRarities.length > 0);
        }
        return this.releases.filter(group => group.cardRarities.length > 0);
    }


}

function _sortReleases(release1: ProductBasic, release2: ProductBasic): number {
    if (release1.name > release2.name) {
        return 1
    } else if (release1.name < release2.name) {
        return -1
    } else {
        return 0
    }
}

function getCardRarityValue(cardRarity: CardRarityBasic): number{
    return cardRarityValue.get(cardRarity.rarity) ?? 10
}

function _sortCardRarities(cardRarity1: CardRarityBasic, cardRarity2: CardRarityBasic): number {
  if (cardRarity1.cardId > cardRarity2.cardId) {
    return 1
  } else if (cardRarity1.cardId < cardRarity2.cardId) {
    return -1
  } else if (getCardRarityValue(cardRarity1) > getCardRarityValue(cardRarity2)){
    return 1
  } else if (getCardRarityValue(cardRarity1) < getCardRarityValue(cardRarity2)){
    return -1
  } else {
    return 0
  }
}

function validateCardRarity(control: AbstractControl): { [key: string]: any } | null {
    if (control.value.id === undefined) {
        return {'Invalid CardRarity': true}
    }
    return null;
}