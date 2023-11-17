import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {EmptyComponent} from "../../shared/layouts/pages/empty/empty.component";

const routes: Routes = [
  {
    path: "",
    component: EmptyComponent,
    children: [
      {
        path: "",
        component: MainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
