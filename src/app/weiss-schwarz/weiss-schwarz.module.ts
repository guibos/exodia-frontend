import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {CardService} from "./providers/card/card.service";
import {FormComponent} from "./components/deck-inserts/form/form.component";
import {WeissSchwarzRoutingModule} from "./weiss-schwarz-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatSliderModule} from "@angular/material/slider";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {
    CardRaritySelectorComponent
} from "./components/deck-inserts/card-rarity-selector/card-rarity-selector.component";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MdbCheckboxModule} from "mdb-angular-ui-kit/checkbox";
import {FormPlaySetComponent} from "./components/deck-inserts/form-play-set/form-play-set.component";
import {GraphQLModule} from "./graphql.module";
import {AlbumFormComponent} from "./components/album/album-form/album-form.component";


@NgModule({
    declarations: [FormComponent, CardRaritySelectorComponent, FormPlaySetComponent,AlbumFormComponent],
    providers: [
        CardService,
    ],
    imports: [
        GraphQLModule,
        MdbCheckboxModule,
        CommonModule,

        WeissSchwarzRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule, MatCardModule, MatRadioModule, MatSliderModule, MatSelectModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule,
        BrowserAnimationsModule,
        MatSelectModule,
        NgxMatSelectSearchModule, MatButtonModule, MatDividerModule, MatIconModule,
    ],
    exports: []
})
export class WeissSchwarzModule {
}
