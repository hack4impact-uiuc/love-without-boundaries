/**
 * @flow
 * @relayHash fa4173993cff5d4bc4bac43f60ed9a23
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuizPage_QueryVariables = {| |};
export type QuizPage_QueryResponse = {|
  +lessons: ?$ReadOnlyArray<?{|
    +quiz: ?{|
      +questions: ?$ReadOnlyArray<?{|
        +questionName: ?string,
      |}>,
    |},
  |}>,
|};
*/


/*
query QuizPage_Query {
  lessons {
    quiz {
      questions {
        questionName
        id
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "questionName",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "QuizPage_Query",
  "id": null,
  "text": "query QuizPage_Query {\n  lessons {\n    quiz {\n      questions {\n        questionName\n        id\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "QuizPage_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "lessons",
        "storageKey": null,
        "args": null,
        "concreteType": "Lesson",
        "plural": true,
        "selections": [
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
                  v0
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "QuizPage_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "lessons",
        "storageKey": null,
        "args": null,
        "concreteType": "Lesson",
        "plural": true,
        "selections": [
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
                  v0,
                  v1
                ]
              }
            ]
          },
          v1
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '2c4004771bea617794544c0d36479472';
module.exports = node;