// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


import {LDPerformer} from "../app/shared/events/classes/ld-performer/ld-performer";
import {LDType} from "../app/shared/events/enums/ld-type";
import {LDOrganizer} from "../app/shared/events/classes/ld-organizer/ld-organizer";
import {LDLocation} from "../app/shared/events/classes/ld-location/ld-location";
import {LDAddress} from "../app/shared/events/classes/ld-address/ld-address";
import {EventbriteConfig} from "../app/shared/events/classes/eventbrite-config/eventbrite-config";
import {BattleFyConfig} from "../app/shared/events/classes/battle-fy-config/battle-fy-config";


export const environment = {
  production: false,
  account: {
    loginURL: '/api/rest/account/login/',
    logoutURL: '/api/rest/account/logout/',
    sessionCookie: 'sessionid'
  },
  gymkhana: {
    host: 'http://api.shirokuro.es:4200',
    graphQLURL: 'http://api.shirokuro.es:4200/api/graphql',
    performer: [new LDPerformer(
      LDType.organization,
      'Shirokuro.club'
    )],
    organizer: [new LDOrganizer(
      LDType.organization,
      'Shirokuro.club',
      'https://shirokuro.club'
    )]

  },
  weissSchwarz: {
    graphQLURL: 'http://api.shirokuro.es:4200/api/graphql',
    albumURL: 'http://api.shirokuro.es:4201/weiss-schwarz/album',
    insertsURL: 'http://api.shirokuro.es:4201/weiss-schwarz/inserts'
  },
  battleFyConfig: [
    new BattleFyConfig(
      "63076223785ce61cba4af597",
      [
        new LDPerformer(
          LDType.organization,
          'Shirokuro.club'
        )
      ],
      [
        new LDOrganizer(
          LDType.organization,
          'Shirokuro.club',
          'https://shirokuro.club'
        )
      ],
      [
        new LDLocation(
          'Espai Jove Casa Sagnier',
          new LDAddress(
            "Jardins d'Enric Sagnier",
            'Barcelona',
            '08006',
            'Barcelona',
            'ES',
            LDType.postalAddress
          ),
          'https://shirokuro.club',
          LDType.place
        ),
      ]
    )],
  eventbrite: [
    new EventbriteConfig(
      "1115011382913",
      "DV3Q3Z2NMRRJCBFSB6H5",
      [
        new LDPerformer(
          LDType.organization,
          'Shirokuro.club')
      ],
      [
        new LDOrganizer(
          LDType.organization,
          'Shirokuro.club',
          'https://shirokuro.club'
        )
      ],
      [
        new LDLocation(
          'Espai Jove Casa Sagnier',
          new LDAddress(
            "Jardins d'Enric Sagnier",
            'Barcelona',
            '08006',
            'Barcelona',
            'ES',
            LDType.postalAddress
          ),
          'https://shirokuro.club',
          LDType.place
        ),
      ]
    )
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
