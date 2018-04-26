/**
 * @flow
 * @relayHash 7cf920cd5b4724a6924be342f0ceb2ab
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addURLMutationVariables = {|
  input: {
    id?: ?string,
    url?: ?string,
    clientMutationId?: ?string,
  },
|};
export type addURLMutationResponse = {|
  +addURL: ?{|
    +student: ?{|
      +id: string,
    |},
    +clientMutationId: ?string,
  |},
|};
*/


/*
mutation addURLMutation(
  $input: AddURLInput!
) {
  addURL(input: $input) {
    student {
      id
    }
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddURLInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addURL",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "AddURLInput!"
      }
    ],
    "concreteType": "AddURLPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "student",
        "storageKey": null,
        "args": null,
        "concreteType": "Student",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "addURLMutation",
  "id": null,
  "text": "mutation addURLMutation(\n  $input: AddURLInput!\n) {\n  addURL(input: $input) {\n    student {\n      id\n    }\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "addURLMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "addURLMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = 'ac92367c6cf399b94b47a5e2d77dafcc';
module.exports = node;
