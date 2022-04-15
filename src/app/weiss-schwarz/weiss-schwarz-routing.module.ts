import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from "./components/deck-inserts/form/form.component";
import {AlbumFormComponent} from "./components/album/album-form/album-form.component";

const routes: Routes = [
    {
        path: "weiss-schwarz/album/form",
        component: AlbumFormComponent
    },
    {
        path: "weiss-schwarz/inserts/form",
        component: FormComponent
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class WeissSchwarzRoutingModule {
}
