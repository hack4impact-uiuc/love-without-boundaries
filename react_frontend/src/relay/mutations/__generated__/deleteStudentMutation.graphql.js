/**
 * @flow
 * @relayHash 1cba378893134464ba5e72b6bde0a039
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteStudentMutationVariables = {|
  input: {
    id: string,
    clientMutationId?: ?string,
  },
|};
export type deleteStudentMutationResponse = {|
  +deleteStudent: ?{|
    +student: ?{|
      +name: ?string,
    |},
  |},
|};
*/


/*
mutation deleteStudentMutation(
  $input: DeleteStudentInput!
) {
  deleteStudent(input: $input) {
    student {
      name
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteStudentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "DeleteStudentInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "deleteStudentMutation",
  "id": null,
  "text": "mutation deleteStudentMutation(\n  $input: DeleteStudentInput!\n) {\n  deleteStudent(input: $input) {\n    student {\n      name\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "deleteStudentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteStudent",
        "storageKey": null,
        "args": v1,
        "concreteType": "DeleteStudentPayload",
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
              v2
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "deleteStudentMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteStudent",
        "storageKey": null,
        "args": v1,
        "concreteType": "DeleteStudentPayload",
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
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '0408c10dcbf8315820c4476a93ef0330';
module.exports = node;
