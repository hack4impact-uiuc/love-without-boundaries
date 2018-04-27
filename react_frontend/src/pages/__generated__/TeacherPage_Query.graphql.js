/**
 * @flow
 * @relayHash bba9c2e6be15bc766ed95a9927337d6c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TeacherPage_QueryVariables = {|
  teacher_id: string,
|};
export type TeacherPage_QueryResponse = {|
  +node: ?{|
    +name?: ?string,
    +email?: ?string,
    +students?: ?$ReadOnlyArray<?{|
      +name: ?string,
      +id: string,
      +URL: ?string,
    |}>,
  |},
|};
*/


/*
query TeacherPage_Query(
  $teacher_id: ID!
) {
  node(id: $teacher_id) {
    __typename
    ... on Teacher {
      name
      email
      students {
        name
        id
        URL
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "teacher_id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "teacher_id",
    "type": "ID!"
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "InlineFragment",
  "type": "Teacher",
  "selections": [
    v2,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "students",
      "storageKey": null,
      "args": null,
      "concreteType": "Student",
      "plural": true,
      "selections": [
        v2,
        v3,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "URL",
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
  "name": "TeacherPage_Query",
  "id": null,
  "text": "query TeacherPage_Query(\n  $teacher_id: ID!\n) {\n  node(id: $teacher_id) {\n    __typename\n    ... on Teacher {\n      name\n      email\n      students {\n        name\n        id\n        URL\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TeacherPage_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v4
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TeacherPage_Query",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          v3,
          v4
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '1b1d9da35113c1aad2a1f38b116102bf';
module.exports = node;
