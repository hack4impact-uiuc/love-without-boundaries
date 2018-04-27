/**
 * @flow
 * @relayHash 02ce098a21c87b9496a56b3c6cc0da6d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StudentPage_QueryVariables = {|
  studentId: string,
|};
export type StudentPage_QueryResponse = {|
  +lessons: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +worksheetURL: ?string,
    +notesURL: ?string,
  |}>,
  +node: ?{|
    +worksheets?: ?$ReadOnlyArray<?{|
      +lessonID: ?string,
      +url: ?string,
    |}>,
    +id?: string,
    +URL?: ?string,
  |},
|};
*/


/*
query StudentPage_Query(
  $studentId: ID!
) {
  lessons {
    id
    name
    worksheetURL
    notesURL
  }
  node(id: $studentId) {
    __typename
    ... on Student {
      worksheets {
        lessonID
        url
      }
      id
      URL
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "studentId",
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
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "lessons",
  "storageKey": null,
  "args": null,
  "concreteType": "Lesson",
  "plural": true,
  "selections": [
    v1,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "worksheetURL",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "notesURL",
      "args": null,
      "storageKey": null
    }
  ]
},
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "studentId",
    "type": "ID!"
  }
],
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "worksheets",
  "storageKey": null,
  "args": null,
  "concreteType": "Worksheet",
  "plural": true,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "lessonID",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": null,
      "storageKey": null
    }
  ]
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "URL",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "StudentPage_Query",
  "id": null,
  "text": "query StudentPage_Query(\n  $studentId: ID!\n) {\n  lessons {\n    id\n    name\n    worksheetURL\n    notesURL\n  }\n  node(id: $studentId) {\n    __typename\n    ... on Student {\n      worksheets {\n        lessonID\n        url\n      }\n      id\n      URL\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "StudentPage_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      v2,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v3,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Student",
            "selections": [
              v4,
              v1,
              v5
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "StudentPage_Query",
    "argumentDefinitions": v0,
    "selections": [
      v2,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v3,
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
          v1,
          {
            "kind": "InlineFragment",
            "type": "Student",
            "selections": [
              v4,
              v5
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '19ad6117fa39c9ef1cfc4d36ab0dd345';
module.exports = node;
