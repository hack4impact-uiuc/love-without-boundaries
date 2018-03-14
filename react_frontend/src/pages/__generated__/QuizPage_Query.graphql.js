/**
 * @flow
 * @relayHash 3bb127b122f7086d6cc105f586c4c2e7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type quizListItem_question$ref = any;
export type QuizPage_QueryVariables = {| |};
export type QuizPage_QueryResponse = {|
  +quiz: ?$ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: quizListItem_question$ref,
  |}>,
|};
*/


/*
query QuizPage_Query {
  quiz {
    id
    ...quizListItem_question
  }
}

fragment quizListItem_question on Quiz {
  questions {
    questionName
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
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
  "text": "query QuizPage_Query {\n  quiz {\n    id\n    ...quizListItem_question\n  }\n}\n\nfragment quizListItem_question on Quiz {\n  questions {\n    questionName\n  }\n}\n",
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
        "name": "quiz",
        "storageKey": null,
        "args": null,
        "concreteType": "Quiz",
        "plural": true,
        "selections": [
          v0,
          {
            "kind": "FragmentSpread",
            "name": "quizListItem_question",
            "args": null
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
        "name": "quiz",
        "storageKey": null,
        "args": null,
        "concreteType": "Quiz",
        "plural": true,
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
    ]
  }
};
})();
(node/*: any*/).hash = 'd962cb864df9400c963bb6b47efd2805';
module.exports = node;
