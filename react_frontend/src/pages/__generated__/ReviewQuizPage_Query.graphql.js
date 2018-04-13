/**
 * @flow
 * @relayHash bc3bce31b979da6b6f4ae99523647537
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ReviewQuizPage_QueryVariables = {|
  student_id: string,
|};
export type ReviewQuizPage_QueryResponse = {|
  +node: ?{|
    +pastQuizzes?: ?$ReadOnlyArray<?{|
      +lessonID: ?string,
      +quizName: ?string,
      +score: ?number,
      +submittedAnswers: ?$ReadOnlyArray<?{|
        +answerChosen: ?string,
      |}>,
    |}>,
  |},
|};
*/


/*
query ReviewQuizPage_Query(
  $student_id: ID!
) {
  node(id: $student_id) {
    __typename
    ... on Student {
      pastQuizzes {
        lessonID
        quizName
        score
        submittedAnswers {
          answerChosen
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "student_id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "student_id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "InlineFragment",
  "type": "Student",
  "selections": [
    {
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
          "name": "lessonID",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "quizName",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "score",
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
              "name": "answerChosen",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ReviewQuizPage_Query",
  "id": null,
  "text": "query ReviewQuizPage_Query(\n  $student_id: ID!\n) {\n  node(id: $student_id) {\n    __typename\n    ... on Student {\n      pastQuizzes {\n        lessonID\n        quizName\n        score\n        submittedAnswers {\n          answerChosen\n        }\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ReviewQuizPage_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ReviewQuizPage_Query",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          v2
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '96843679741598ce80efa0c2cc7a141a';
module.exports = node;
