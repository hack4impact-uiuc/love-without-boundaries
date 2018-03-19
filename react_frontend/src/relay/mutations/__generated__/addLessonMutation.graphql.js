/**
 * @flow
 * @relayHash e00d9acc02cce6d295e9d06ba46c655e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addLessonMutationVariables = {|
  input: {
    name: string,
    quiz: string,
    worksheetName: string,
    worksheetNameURL: string,
    notesName: string,
    noteURL: string,
    clientMutationId?: ?string,
  },
|};
export type addLessonMutationResponse = {|
  +createLesson: ?{|
    +lesson: ?{|
      +name: ?string,
    |},
  |},
|};
*/


/*
mutation addLessonMutation(
  $input: CreateLessonInput!
) {
  createLesson(input: $input) {
    lesson {
      name
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
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "addLessonMutation",
  "id": null,
  "text": "mutation addLessonMutation(\n  $input: CreateLessonInput!\n) {\n  createLesson(input: $input) {\n    lesson {\n      name\n      id\n    }\n  }\n}\n",
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
            "name": "lesson",
            "storageKey": null,
            "args": null,
            "concreteType": "Lesson",
            "plural": false,
            "selections": [
              v2
            ]
          }
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
            "name": "lesson",
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
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '0b647e73fbf8568c9a1da0f01cd68a8a';
module.exports = node;
