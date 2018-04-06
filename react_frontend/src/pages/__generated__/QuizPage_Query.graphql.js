/**
 * @flow
 * @relayHash 238aea7f8af55ed69cb5d25cf1517413
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
        +answers: ?$ReadOnlyArray<?{|
          +answerName: ?string,
          +isCorrect: ?boolean,
        |}>,
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
        answers {
          answerName
          isCorrect
        }
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
},
v2 = {
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
  "text": "query QuizPage_Query {\n  lessons {\n    quiz {\n      questions {\n        questionName\n        answers {\n          answerName\n          isCorrect\n        }\n        id\n      }\n    }\n    id\n  }\n}\n",
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
                  v0,
                  v1
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
                  v1,
                  v2
                ]
              }
            ]
          },
          v2
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'e31c8194ef18e97299a11d110be17397';
module.exports = node;
