/**
 * @flow
 * @relayHash 55dd333cc4b422ed7b5c4093cfe7f0c5
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
    +worksheetName: ?string,
    +worksheetURL: ?string,
    +notesName: ?string,
    +notesURL: ?string,
  |}>,
  +node: ?{|
    +worksheets?: ?$ReadOnlyArray<?{|
      +lessonID: ?string,
    |}>,
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
    worksheetName
    worksheetURL
    notesName
    notesURL
  }
  node(id: $studentId) {
    __typename
    ... on Student {
      worksheets {
        lessonID
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
      "name": "worksheetName",
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
      "name": "notesName",
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
  "kind": "InlineFragment",
  "type": "Student",
  "selections": [
    {
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
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "StudentPage_Query",
  "id": null,
  "text": "query StudentPage_Query(\n  $studentId: ID!\n) {\n  lessons {\n    id\n    name\n    worksheetName\n    worksheetURL\n    notesName\n    notesURL\n  }\n  node(id: $studentId) {\n    __typename\n    ... on Student {\n      worksheets {\n        lessonID\n      }\n    }\n    id\n  }\n}\n",
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
          v4
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
          v4
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'c2be841a1edd0ceda7bdf48e4c8a85ef';
module.exports = node;
