/**
 * @flow
 * @relayHash 23638c121831c815bef7d0b85256e012
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type studentListItem_student$ref = any;
export type HomePage_QueryVariables = {| |};
export type HomePage_QueryResponse = {|
  +students: ?$ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: studentListItem_student$ref,
  |}>,
|};
*/


/*
query HomePage_Query {
  students {
    id
    ...studentListItem_student
  }
}

fragment studentListItem_student on Student {
  id
  name
  teacher {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "HomePage_Query",
  "id": null,
  "text": "query HomePage_Query {\n  students {\n    id\n    ...studentListItem_student\n  }\n}\n\nfragment studentListItem_student on Student {\n  id\n  name\n  teacher {\n    name\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HomePage_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "students",
        "storageKey": null,
        "args": null,
        "concreteType": "Student",
        "plural": true,
        "selections": [
          v0,
          {
            "kind": "FragmentSpread",
            "name": "studentListItem_student",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomePage_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "students",
        "storageKey": null,
        "args": null,
        "concreteType": "Student",
        "plural": true,
        "selections": [
          v0,
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "teacher",
            "storageKey": null,
            "args": null,
            "concreteType": "Teacher",
            "plural": false,
            "selections": [
              v1,
              v0
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '7b38ae507eec63b9375b3f7cf966e609';
module.exports = node;
