/**
 * @flow
 * @relayHash a0aaa8c59aa5b5364cb99bb0edcb3a0c
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
    +name?: ?string,
    +grades?: ?$ReadOnlyArray<?{|
      +lesson: ?string,
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
      worksheets {
        lessonID
        url
      }
      name
      grades {
        lesson
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
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "grades",
  "storageKey": null,
  "args": null,
  "concreteType": "Grade",
  "plural": true,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "lesson",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "score",
      "args": null,
      "storageKey": null
    }
  ]
},
v7 = {
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
  "text": "query StudentPage_Query(\n  $studentId: ID!\n) {\n  lessons {\n    id\n    name\n    worksheetURL\n    notesURL\n  }\n  node(id: $studentId) {\n    __typename\n    ... on Student {\n      worksheets {\n        lessonID\n        url\n      }\n      name\n      grades {\n        lesson\n        score\n      }\n      id\n      URL\n    }\n    id\n  }\n}\n",
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
              v5,
              v2,
              v6,
              v1,
              v7
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
              v5,
              v2,
              v6,
              v7
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '6f172b280f956f13b2a5ff9b5b2f4879';
module.exports = node;
