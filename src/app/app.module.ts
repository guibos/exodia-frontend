import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "./shared/shared.module";
import {RouterModule} from "@angular/router";
import {FeaturesModule} from "./features/features.module";
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {LayoutsModule} from "./shared/layouts/layouts.module";
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {APOLLO_NAMED_OPTIONS, NamedOptions} from "apollo-angular";
import {HttpLink} from "apollo-angular/http";
import {InMemoryCache} from "@apollo/client/core";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CookieService} from "ngx-cookie-service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    NgbModule,
    RouterModule,
    FeaturesModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    LayoutsModule,
    HttpClientModule,
    FontAwesomeModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken',
    }),

  ],
  providers: [
    CookieService,
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory(httpLink: HttpLink): NamedOptions {
        return {
          // account: {
          //   cache: new InMemoryCache(),
          //   link: httpLink.create({
          //     uri: environment.account.graphQLURL
          //   })
          // },
          weiss: {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: environment.weissSchwarz.graphQLURL
            })
          },
          gymkhana: {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: environment.gymkhana.graphQLURL
            })
          },
        }
      },
      deps: [HttpLink]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
