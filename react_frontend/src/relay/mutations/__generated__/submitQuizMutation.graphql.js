/**
 * @flow
 * @relayHash 6a8a56b161fd9e29bae4a3be9ef212d1
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
      +pastQuizzes: ?$ReadOnlyArray<?{|
        +quizName: ?string,
        +submittedAnswers: ?$ReadOnlyArray<?{|
          +questionID: ?string,
          +answerChosen: ?string,
        |}>,
      |}>,
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
      pastQuizzes {
        quizName
        submittedAnswers {
          questionID
          answerChosen
        }
      }
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
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pastQuizzes",
  "storageKey": null,
  "args": null,
  "concreteType": "PastQuiz",
  "plural": true,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "quizName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "submittedAnswers",
      "storageKey": null,
      "args": null,
      "concreteType": "SubmittedAnswer",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "questionID",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "answerChosen",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "submitQuizMutation",
  "id": null,
  "text": "mutation submitQuizMutation(\n  $input: SubmitQuizInput!\n) {\n  submitQuiz(input: $input) {\n    student {\n      name\n      pastQuizzes {\n        quizName\n        submittedAnswers {\n          questionID\n          answerChosen\n        }\n      }\n      id\n    }\n  }\n}\n",
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
              v2,
              v3
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
              v3,
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
(node/*: any*/).hash = '0eabb8adf1d0d6b12bdc1deded919982';
module.exports = node;
