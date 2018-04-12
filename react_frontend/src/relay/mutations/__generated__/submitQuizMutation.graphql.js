/**
 * @flow
 * @relayHash e92ff9b6edd52b3385b1efc928405d01
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type submitQuizMutationVariables = {|
  input: {
    id?: ?string,
    lessonID?: ?string,
    questions?: ?$ReadOnlyArray<?string>,
    answers?: ?$ReadOnlyArray<?string>,
    clientMutationId?: ?string,
  },
|};
export type submitQuizMutationResponse = {|
  +submitQuiz: ?{|
    +student: ?{|
      +name: ?string,
    |},
    +clientMutationId: ?string,
  |},
|};
*/


/*
mutation submitQuizMutation(
  $input: SubmitQuizInput!
) {
  submitQuiz(input: $input) {
    student {
      name
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
    "type": "SubmitQuizInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "SubmitQuizInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clientMutationId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "submitQuizMutation",
  "id": null,
  "text": "mutation submitQuizMutation(\n  $input: SubmitQuizInput!\n) {\n  submitQuiz(input: $input) {\n    student {\n      name\n      id\n    }\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "submitQuizMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "submitQuiz",
        "storageKey": null,
        "args": v1,
        "concreteType": "SubmitQuizPayload",
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
          },
          v3
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "submitQuizMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "submitQuiz",
        "storageKey": null,
        "args": v1,
        "concreteType": "SubmitQuizPayload",
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
          },
          v3
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '0ced0c9b9fe712e266599252d8134d41';
module.exports = node;
