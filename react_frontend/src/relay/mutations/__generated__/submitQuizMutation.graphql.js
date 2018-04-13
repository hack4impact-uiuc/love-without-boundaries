/**
 * @flow
 * @relayHash 382358ee0b9b6f72ce8489385d9cefb7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type submitQuizMutationVariables = {|
  input: {
    id?: ?string,
    lessonID?: ?string,
    answeredQuestions?: ?{
      submissions?: ?$ReadOnlyArray<?{
        questionID?: ?string,
        answerChosen?: ?string,
      }>,
    },
    clientMutationId?: ?string,
  },
|};
export type submitQuizMutationResponse = {|
  +submitQuiz: ?{|
    +student: ?{|
      +name: ?string,
    |},
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
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "submitQuizMutation",
  "id": null,
  "text": "mutation submitQuizMutation(\n  $input: SubmitQuizInput!\n) {\n  submitQuiz(input: $input) {\n    student {\n      name\n      id\n    }\n  }\n}\n",
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
          }
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
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '0f57ef2ea14ec0d89596a4f9a807fb62';
module.exports = node;
