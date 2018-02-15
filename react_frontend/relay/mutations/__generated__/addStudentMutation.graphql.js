/**
 * @flow
 * @relayHash a6d32eb7ca9883081bcb3d26b8862276
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type addStudentMutationVariables = {|
  name: string;
|};
export type addStudentMutationResponse = {|
  +createStudent: ?{|
    +name: ?string;
  |};
|};
*/


/*
mutation addStudentMutation(
  $name: String!
) {
  createStudent(name: $name) {
    name
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "name",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "addStudentMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name",
            "type": "String"
          }
        ],
        "concreteType": "Student",
        "name": "createStudent",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "addStudentMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "name",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "addStudentMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name",
            "type": "String"
          }
        ],
        "concreteType": "Student",
        "name": "createStudent",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation addStudentMutation(\n  $name: String!\n) {\n  createStudent(name: $name) {\n    name\n  }\n}\n"
};

module.exports = batch;
