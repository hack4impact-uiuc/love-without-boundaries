/**
 * @flow
 * @relayHash dcc4d02dfd0d2d5374c765c2c5c21cf7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StudentPage_QueryVariables = {| |};
export type StudentPage_QueryResponse = {|
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
query StudentPage_Query {
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
  "name": "StudentPage_Query",
  "id": null,
  "text": "query StudentPage_Query {\n  lessons {\n    name\n    worksheetName\n    worksheetURL\n    notesName\n    notesURL\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "StudentPage_Query",
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
    "name": "StudentPage_Query",
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
(node/*: any*/).hash = '0857086aa4a409b68bfa2d40d6efd5b7';
module.exports = node;
