/**
 * @flow
 * @relayHash a839eeb9621ba65fe4e3bbac1230be1d
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type App_QueryResponse = {|
  +students: ?$ReadOnlyArray<?{| |}>;
|};
*/


/*
query App_Query {
  students {
    ...studentListItem_student
  }
}

fragment studentListItem_student on Student {
  name
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "App_Query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Student",
        "name": "students",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "studentListItem_student",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "App_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "App_Query",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Student",
        "name": "students",
        "plural": true,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Student",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query App_Query {\n  students {\n    ...studentListItem_student\n  }\n}\n\nfragment studentListItem_student on Student {\n  name\n}\n"
};

module.exports = batch;
