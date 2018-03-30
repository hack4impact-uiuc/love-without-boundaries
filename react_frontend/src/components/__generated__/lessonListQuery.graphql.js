/**
 * @flow
 * @relayHash a7836f7fee3608811c4005b89c2d5cf7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type lessonListQueryVariables = {| |};
export type lessonListQueryResponse = {|
  +lessons: ?$ReadOnlyArray<?{|
    +name: ?string,
    +worksheetName: ?string,
    +worksheetURL: ?string,
    +notesName: ?string,
    +notesURL: ?string,
  |}>,
|};
*/


/*
query lessonListQuery {
  lessons {
    name
    worksheetName
    worksheetURL
    notesName
    notesURL
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "worksheetName",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "worksheetURL",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "notesName",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "notesURL",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "lessonListQuery",
  "id": null,
  "text": "query lessonListQuery {\n  lessons {\n    name\n    worksheetName\n    worksheetURL\n    notesName\n    notesURL\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "lessonListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "lessons",
        "storageKey": null,
        "args": null,
        "concreteType": "Lesson",
        "plural": true,
        "selections": [
          v0,
          v1,
          v2,
          v3,
          v4
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "lessonListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "lessons",
        "storageKey": null,
        "args": null,
        "concreteType": "Lesson",
        "plural": true,
        "selections": [
          v0,
          v1,
          v2,
          v3,
          v4,
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
};
})();
(node/*: any*/).hash = '4a01e104029f079b5d4b22abb8b57df8';
module.exports = node;
