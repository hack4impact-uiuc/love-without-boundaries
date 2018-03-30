/**
 * @flow
 * @relayHash 45b6c571b38d7bb4ab8962b1eecf63fe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AdminPageMutationVariables = {|
  input: {
    studentID?: ?string,
    teacherID?: ?string,
    clientMutationId?: ?string,
  },
|};
export type AdminPageMutationResponse = {|
  +assignStudentToTeacher: ?{|
    +student: ?{|
      +name: ?string,
    |},
  |},
|};
*/


/*
mutation AdminPageMutation(
  $input: AssignStudentToTeacherInput!
) {
  assignStudentToTeacher(input: $input) {
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
    "type": "AssignStudentToTeacherInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AssignStudentToTeacherInput!"
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
  "name": "AdminPageMutation",
  "id": null,
  "text": "mutation AdminPageMutation(\n  $input: AssignStudentToTeacherInput!\n) {\n  assignStudentToTeacher(input: $input) {\n    student {\n      name\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AdminPageMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "assignStudentToTeacher",
        "storageKey": null,
        "args": v1,
        "concreteType": "AssignStudentToTeacherPayload",
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
    "name": "AdminPageMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "assignStudentToTeacher",
        "storageKey": null,
        "args": v1,
        "concreteType": "AssignStudentToTeacherPayload",
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
(node/*: any*/).hash = 'b1b3791c312803d61069a76f5b4a08e7';
module.exports = node;
