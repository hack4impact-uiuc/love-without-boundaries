/**
 * @flow
 * @relayHash 7d785e84729bb6b59e11c992c8ace0a7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addQuestionMutationVariables = {|
  input: {
    id?: ?string,
    question?: ?{
      questionName?: ?string,
      answers?: ?$ReadOnlyArray<?{
        answerName?: ?string,
        isCorrect?: ?boolean,
      }>,
    },
    clientMutationId?: ?string,
  },
|};
export type addQuestionMutationResponse = {|
  +addQuestion: ?{|
    +lesson: ?{|
      +quiz: ?{|
        +questions: ?$ReadOnlyArray<?{|
          +questionName: ?string,
        |}>,
      |},
    |},
  |},
|};
*/


/*
mutation addQuestionMutation(
  $input: AddQuestionInput!
) {
  addQuestion(input: $input) {
    lesson {
      quiz {
        questions {
          questionName
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
    "type": "AddQuestionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AddQuestionInput!"
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
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "addQuestionMutation",
  "id": null,
  "text": "mutation addQuestionMutation(\n  $input: AddQuestionInput!\n) {\n  addQuestion(input: $input) {\n    lesson {\n      quiz {\n        questions {\n          questionName\n          id\n        }\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "addQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addQuestion",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddQuestionPayload",
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
                      v2
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
    "name": "addQuestionMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addQuestion",
        "storageKey": null,
        "args": v1,
        "concreteType": "AddQuestionPayload",
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
              },
              v3
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '90b7cb25417eee33618a36d0df769588';
module.exports = node;
