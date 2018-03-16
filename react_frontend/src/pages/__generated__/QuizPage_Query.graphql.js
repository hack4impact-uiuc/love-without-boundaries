/**
 * @flow
 * @relayHash 77a6c107523a125961d6b6bbffedda96
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuizPage_QueryVariables = {| |};
export type QuizPage_QueryResponse = {|
  +quiz: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +questions: ?$ReadOnlyArray<?{|
      +questionName: ?string,
    |}>,
  |}>,
|};
*/


/*
query QuizPage_Query {
  quiz {
    id
    name
    questions {
      questionName
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "quiz",
    "storageKey": null,
    "args": null,
    "concreteType": "Quiz",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
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
        "name": "questions",
        "storageKey": null,
        "args": null,
        "concreteType": "Question",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "questionName",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "QuizPage_Query",
  "id": null,
  "text": "query QuizPage_Query {\n  quiz {\n    id\n    name\n    questions {\n      questionName\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "QuizPage_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "QuizPage_Query",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = 'fe245f7a92b65d93208cfd2a1ad24826';
module.exports = node;
