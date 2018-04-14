/**
 * @flow
 * @relayHash 17679fd67168ff663b5f99df4565452f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuizPage_QueryVariables = {|
  lesson_id: string,
|};
export type QuizPage_QueryResponse = {|
  +node: ?{|
    +id: string,
    +name?: ?string,
    +quiz?: ?{|
      +questions: ?$ReadOnlyArray<?{|
        +id: ?string,
        +questionName: ?string,
        +answers: ?$ReadOnlyArray<?{|
          +answerName: ?string,
          +isCorrect: ?boolean,
        |}>,
      |}>,
    |},
  |},
|};
*/


/*
query QuizPage_Query(
  $lesson_id: ID!
) {
  node(id: $lesson_id) {
    __typename
    id
    ... on Lesson {
      name
      quiz {
        questions {
          id
          questionName
          answers {
            answerName
            isCorrect
          }
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "lesson_id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "lesson_id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "type": "Lesson",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "quiz",
      "storageKey": null,
      "args": null,
      "concreteType": "Quiz",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "questions",
          "storageKey": null,
          "args": null,
          "concreteType": "Question",
          "plural": true,
          "selections": [
            v2,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "questionName",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "answers",
              "storageKey": null,
              "args": null,
              "concreteType": "Answer",
              "plural": true,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "answerName",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "isCorrect",
                  "args": null,
                  "storageKey": null
                }
              ]
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
  "name": "QuizPage_Query",
  "id": null,
  "text": "query QuizPage_Query(\n  $lesson_id: ID!\n) {\n  node(id: $lesson_id) {\n    __typename\n    id\n    ... on Lesson {\n      name\n      quiz {\n        questions {\n          id\n          questionName\n          answers {\n            answerName\n            isCorrect\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "QuizPage_Query",
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
          v2,
          v3
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "QuizPage_Query",
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
          v2,
          v3
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'fda0bc57aeb4d96b6ea3b7c1778bda3a';
module.exports = node;
