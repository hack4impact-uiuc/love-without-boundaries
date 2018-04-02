/**
 * @flow
 * @relayHash 7e8afd27b47a13909297feae0721e238
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuizPage_QueryVariables = {| |};
export type QuizPage_QueryResponse = {|
  +lessons: ?$ReadOnlyArray<?{|
    +quiz: ?{|
      +name: ?string,
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
      name
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "questionName",
  "args": null,
  "storageKey": null
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
  "text": "query QuizPage_Query {\n  lessons {\n    quiz {\n      name\n      questions {\n        questionName\n        id\n      }\n    }\n    id\n  }\n}\n",
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
              v0,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "questions",
                "storageKey": null,
                "args": null,
                "concreteType": "Question",
                "plural": true,
                "selections": [
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
              v0,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "questions",
                "storageKey": null,
                "args": null,
                "concreteType": "Question",
                "plural": true,
                "selections": [
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
(node/*: any*/).hash = '34df64df3cffb264f41a261a649c581f';
module.exports = node;
