/**
 * @flow
 * @relayHash 24095514a4fc087a8ecf5fe5b97a50e2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuizPage_QueryVariables = {| |};
export type QuizPage_QueryResponse = {|
  +lessons: ?$ReadOnlyArray<?{|
    +quiz: ?string,
  |}>,
|};
*/


/*
query QuizPage_Query {
  lessons {
    quiz
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "quiz",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "QuizPage_Query",
  "id": null,
  "text": "query QuizPage_Query {\n  lessons {\n    quiz\n    id\n  }\n}\n",
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
          v0
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
          v0,
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
};
})();
(node/*: any*/).hash = 'c7386459deb4b52e1bf3ef677af319ca';
module.exports = node;
