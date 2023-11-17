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
  production: true,
  account: {
    graphQLURL: 'http://127.0.0.1:8000/account/api/graphql',
  },
  weissSchwarz: {
    graphQLURL: 'http://127.0.0.1:8000/weiss-schwarz/api/graphql',
    albumURL: 'http://127.0.0.1:4201/weiss-schwarz/album',
    insertsURL: 'http://127.0.0.1:4201/weiss-schwarz/inserts'
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
