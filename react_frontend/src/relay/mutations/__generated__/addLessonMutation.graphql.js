/**
 * @flow
 * @relayHash ad7e59a07355a117ca8a2dba5753fb23
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addLessonMutationVariables = {|
  input: {
    name: string,
    quiz?: ?{
      name?: ?string,
      questions?: ?$ReadOnlyArray<?{
        questionName?: ?string,
        answers?: ?$ReadOnlyArray<?{
          answerName?: ?string,
          isCorrect?: ?boolean,
        }>,
      }>,
      lessonID?: ?string,
    },
    worksheetName?: ?string,
    worksheetURL?: ?string,
    notesName?: ?string,
    notesURL?: ?string,
    clientMutationId?: ?string,
  },
|};
export type addLessonMutationResponse = {|
  +createLesson: ?{|
    +lesson: ?{|
      +id: string,
    |},
    +clientMutationId: ?string,
  |},
|};
*/


/*
mutation addLessonMutation(
  $input: CreateLessonInput!
) {
  createLesson(input: $input) {
    lesson {
      id
    }
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateLessonInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createLesson",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateLessonInput!"
      }
    ],
    "concreteType": "CreateLessonPayload",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "addLessonMutation",
  "id": null,
  "text": "mutation addLessonMutation(\n  $input: CreateLessonInput!\n) {\n  createLesson(input: $input) {\n    lesson {\n      id\n    }\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "addLessonMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "addLessonMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '71ccb63a40e84eda3102756358045596';
module.exports = node;
