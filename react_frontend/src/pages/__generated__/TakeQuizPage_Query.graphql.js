/**
 * @flow
 * @relayHash 832b1e8138b993eebb1a516c36b88153
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TakeQuizPage_QueryVariables = {|
  quiz_id: string,
|};
export type TakeQuizPage_QueryResponse = {|
  +node: ?{|
    +id: string,
    +__typename: string,
    +name?: ?string,
    +quiz?: ?{|
      +lessonID: ?string,
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
query TakeQuizPage_Query(
  $quiz_id: ID!
) {
  node(id: $quiz_id) {
    id
    __typename
    ... on Lesson {
      name
      quiz {
        lessonID
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
    "name": "quiz_id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "node",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "quiz_id",
        "type": "ID!"
      }
    ],
    "concreteType": null,
    "plural": false,
    "selections": [
      v1,
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "__typename",
        "args": null,
        "storageKey": null
      },
      {
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
                "kind": "ScalarField",
                "alias": null,
                "name": "lessonID",
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
                  v1,
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TakeQuizPage_Query",
  "id": null,
  "text": "query TakeQuizPage_Query(\n  $quiz_id: ID!\n) {\n  node(id: $quiz_id) {\n    id\n    __typename\n    ... on Lesson {\n      name\n      quiz {\n        lessonID\n        questions {\n          id\n          questionName\n          answers {\n            answerName\n            isCorrect\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TakeQuizPage_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "TakeQuizPage_Query",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
(node/*: any*/).hash = '1fe35e7112e6455eb33b46448d60a9a1';
module.exports = node;
