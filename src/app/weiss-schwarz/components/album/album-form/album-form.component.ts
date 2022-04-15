import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {CardService} from "../../../providers/card/card.service";
import {ProductBasic} from "../../../classes/product-basic/product-basic";
import {environment} from "../../../../../environments/environment";


export interface User {
    name: string;
}


@Component({
    selector: 'app-album-form',
    templateUrl: './album-form.component.html',
    styleUrls: ['./album-form.component.css']
})
export class AlbumFormComponent implements OnInit {
    myControl = new FormControl('');
    options: ProductBasic[] = [{id: 1, name: 'string', cardRarities: []}];
    filteredOptions: Observable<User[]> | null = null;

    constructor(private cardService: CardService) {
        this.cardService.getProductsCardRarity().subscribe(
            releases => {
                releases = releases.filter(release => release.cardRarities.length !=0 )
                this.options = releases
                this.filteredOptions = this.myControl.valueChanges.pipe(
                    startWith(''),
                    map(value => {
                        return (typeof value === 'string' ? value : value?.name);
                    }),
                    map(name => (name ? this._filter(name) : this.options.slice())),
                );
            }
        )

    }


    ngOnInit() {

    }

    displayFn(release: ProductBasic): string {
        return release && release.name ? release.name : '';
    }

    private _filter(name: string): ProductBasic[] {
        const filterValue = name.toLowerCase();

        return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
    }

    public submit() {
        window.location.href = `${environment.weissSchwarzAlbum}?products=${this.myControl.value.id}`
    }

}
