/**
 * @flow
 * @relayHash 59664ef266d3f192f3e016ea6bca4749
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteQuestionMutationVariables = {|
  input: {
    questionId: string,
    lessonId: string,
    clientMutationId?: ?string,
  },
|};
export type deleteQuestionMutationResponse = {|
  +deleteQuestion: ?{|
    +lesson: ?{|
      +quiz: ?{|
        +questions: ?$ReadOnlyArray<?{|
          +questionName: ?string,
          +answers: ?$ReadOnlyArray<?{|
            +answerName: ?string,
            +isCorrect: ?boolean,
          |}>,
        |}>,
      |},
    |},
  |},
|};
*/


/*
mutation deleteQuestionMutation(
  $input: deleteQuestionInput!
) {
  deleteQuestion(input: $input) {
    lesson {
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
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "deleteQuestionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "deleteQuestionInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "questionName",
  "args": null,
  "storageKey": null
},
v3 = {
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
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "deleteQuestionMutation",
  "id": null,
  "text": "mutation deleteQuestionMutation(\n  $input: deleteQuestionInput!\n) {\n  deleteQuestion(input: $input) {\n    lesson {\n      quiz {\n        questions {\n          questionName\n          answers {\n            answerName\n            isCorrect\n          }\n          id\n        }\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "deleteQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteQuestion",
        "storageKey": null,
        "args": v1,
        "concreteType": "deleteQuestionPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "lesson",
            "storageKey": null,
            "args": null,
            "concreteType": "Lesson",
            "plural": false,
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
                      v2,
                      v3
                    ]
                  }
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
    "name": "deleteQuestionMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteQuestion",
        "storageKey": null,
        "args": v1,
        "concreteType": "deleteQuestionPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "lesson",
            "storageKey": null,
            "args": null,
            "concreteType": "Lesson",
            "plural": false,
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
                      v2,
                      v3,
                      v4
                    ]
                  }
                ]
              },
              v4
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '9e7cab92f75d1be1127e0f4a5ba2f007';
module.exports = node;
