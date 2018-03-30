/**
 * @flow
 * @relayHash 00443cd09872148569db361956cad209
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
    +admin: ?{|
      +name: ?string,
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
    admin {
      name
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CreateLessonInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clientMutationId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "addLessonMutation",
  "id": null,
  "text": "mutation addLessonMutation(\n  $input: CreateLessonInput!\n) {\n  createLesson(input: $input) {\n    admin {\n      name\n      id\n    }\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "addLessonMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createLesson",
        "storageKey": null,
        "args": v1,
        "concreteType": "CreateLessonPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "admin",
            "storageKey": null,
            "args": null,
            "concreteType": "Lesson",
            "plural": false,
            "selections": [
              v2
            ]
          },
          v3
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "addLessonMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createLesson",
        "storageKey": null,
        "args": v1,
        "concreteType": "CreateLessonPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "admin",
            "storageKey": null,
            "args": null,
            "concreteType": "Lesson",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          },
          v3
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '54eb4393c16cabf4f51a0a01ee49dc13';
module.exports = node;
