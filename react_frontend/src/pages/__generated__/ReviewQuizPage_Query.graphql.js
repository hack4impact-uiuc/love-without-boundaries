/**
 * @flow
 * @relayHash 64ae48e1172fe77548b16ced0ba794b8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ReviewQuizPage_QueryVariables = {| |};
export type ReviewQuizPage_QueryResponse = {|
  +students: ?$ReadOnlyArray<?{|
    +pastQuizzes: ?$ReadOnlyArray<?{|
      +quizName: ?string,
      +score: ?number,
      +questions: ?$ReadOnlyArray<?{|
        +answerChosen: ?string,
        +correctAnswer: ?string,
      |}>,
    |}>,
  |}>,
|};
*/


/*
query ReviewQuizPage_Query {
  students {
    pastQuizzes {
      quizName
      score
      questions {
        answerChosen
        correctAnswer
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
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
      "kind": "ScalarField",
      "alias": null,
      "name": "score",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "questions",
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
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "correctAnswer",
          "args": null,
          "storageKey": null
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
  "text": "query ReviewQuizPage_Query {\n  students {\n    pastQuizzes {\n      quizName\n      score\n      questions {\n        answerChosen\n        correctAnswer\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ReviewQuizPage_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "students",
        "storageKey": null,
        "args": null,
        "concreteType": "Student",
        "plural": true,
        "selections": [
          v0
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ReviewQuizPage_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "students",
        "storageKey": null,
        "args": null,
        "concreteType": "Student",
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
(node/*: any*/).hash = '69250d57be13f7ca32caca755b7860a7';
module.exports = node;
