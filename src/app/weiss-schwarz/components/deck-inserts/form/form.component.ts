import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormPlaySet} from "../../../classes/form-play-set/form-play-set";
import {environment} from "../../../../../environments/environment";
import {HttpParams} from "@angular/common/http";


export const _filter = (opt: string[], value: string): string[] => {
    const filterValue = value.toLowerCase();

    return opt.filter(item => item.toLowerCase().includes(filterValue));
};


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    deckInsertsForm: FormGroup;

    constructor(private _formBuilder: FormBuilder) {

        this.deckInsertsForm = this._formBuilder.group({
            playSets: []
        })

    }

    ngOnInit(): void {

    }

    onSubmit() {
        let params = new HttpParams()
        let playSet: FormPlaySet

        for (playSet of this.deckInsertsForm.value.playSets) {
            params = params.append(playSet.cardRarity.selected.id.toString(), playSet.quantity)
        }
        window.location.href = `${environment.weissSchwarzInserts}?${params.toString()}`
    }
}