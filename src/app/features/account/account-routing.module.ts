import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OnlyTitleComponent} from "../../shared/layouts/pages/only-title/only-title.component";
import {AuthenticationComponent} from "./pages/authentication/authentication.component";

const routes: Routes = [
  {
    path: "account",
    component: OnlyTitleComponent,
    children: [
      {
        path: "authentication",
        component: AuthenticationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
