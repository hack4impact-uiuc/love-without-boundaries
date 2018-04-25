/**
 * @flow
 * @relayHash 08e7ebb30bdc87f0e4c4edd30aac30d2
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
    +students?: ?$ReadOnlyArray<?{|
      +name: ?string,
      +id: string,
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
      students {
        name
        id
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
      "kind": "LinkedField",
      "alias": null,
      "name": "students",
      "storageKey": null,
      "args": null,
      "concreteType": "Student",
      "plural": true,
      "selections": [
        v2,
        v3
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TeacherPage_Query",
  "id": null,
  "text": "query TeacherPage_Query(\n  $teacher_id: ID!\n) {\n  node(id: $teacher_id) {\n    __typename\n    ... on Teacher {\n      name\n      students {\n        name\n        id\n      }\n    }\n    id\n  }\n}\n",
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
(node/*: any*/).hash = '9c32930c8328dcdce6df7693fa9ce918';
module.exports = node;
