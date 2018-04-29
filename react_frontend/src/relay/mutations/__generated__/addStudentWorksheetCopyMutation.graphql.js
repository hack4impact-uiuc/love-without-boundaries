/**
 * @flow
 * @relayHash a9611fca25acfbba20b897b7cbc3a7e6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddStudentWorksheetCopyInput = {
  studentID?: ?string,
  lessonID?: ?string,
  url?: ?string,
  clientMutationId?: ?string,
};
export type addStudentWorksheetCopyMutationVariables = {|
  input: AddStudentWorksheetCopyInput
|};
export type addStudentWorksheetCopyMutationResponse = {|
  +addStudentWorksheetCopy: ?{|
    +clientMutationId: ?string
  |}
|};
*/


/*
mutation addStudentWorksheetCopyMutation(
  $input: AddStudentWorksheetCopyInput!
) {
  addStudentWorksheetCopy(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddStudentWorksheetCopyInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addStudentWorksheetCopy",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "AddStudentWorksheetCopyInput!"
      }
    ],
    "concreteType": "AddStudentWorksheetCopyPayload",
    "plural": false,
    "selections": [
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
  "name": "addStudentWorksheetCopyMutation",
  "id": null,
  "text": "mutation addStudentWorksheetCopyMutation(\n  $input: AddStudentWorksheetCopyInput!\n) {\n  addStudentWorksheetCopy(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "addStudentWorksheetCopyMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "addStudentWorksheetCopyMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0b9fa1d2b2f9817378703de099ab86be';
module.exports = node;
