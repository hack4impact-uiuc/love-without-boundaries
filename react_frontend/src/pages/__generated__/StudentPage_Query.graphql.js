/**
 * @flow
 * @relayHash 66ccf5aa16cba68d7465ffa0ed1e200f
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
    +name?: ?string,
    +worksheets?: ?$ReadOnlyArray<?{|
      +lessonID: ?string,
      +url: ?string,
    |}>,
    +grades?: ?$ReadOnlyArray<?{|
      +lessonID: ?string,
      +score: ?number,
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
      name
      worksheets {
        lessonID
        url
      }
      grades {
        lessonID
        score
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
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "lessons",
  "storageKey": null,
  "args": null,
  "concreteType": "Lesson",
  "plural": true,
  "selections": [
    v1,
    v2,
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
v4 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "studentId",
    "type": "ID!"
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lessonID",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "worksheets",
  "storageKey": null,
  "args": null,
  "concreteType": "Worksheet",
  "plural": true,
  "selections": [
    v5,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": null,
      "storageKey": null
    }
  ]
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "grades",
  "storageKey": null,
  "args": null,
  "concreteType": "Grade",
  "plural": true,
  "selections": [
    v5,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "score",
      "args": null,
      "storageKey": null
    }
  ]
},
v8 = {
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
  "text": "query StudentPage_Query(\n  $studentId: ID!\n) {\n  lessons {\n    id\n    name\n    worksheetURL\n    notesURL\n  }\n  node(id: $studentId) {\n    __typename\n    ... on Student {\n      name\n      worksheets {\n        lessonID\n        url\n      }\n      grades {\n        lessonID\n        score\n      }\n      id\n      URL\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "StudentPage_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      v3,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v4,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Student",
            "selections": [
              v2,
              v6,
              v7,
              v1,
              v8
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
      v3,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v4,
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
              v2,
              v6,
              v7,
              v8
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '39feb481cdad48380c8f08f31f26d4c1';
module.exports = node;
