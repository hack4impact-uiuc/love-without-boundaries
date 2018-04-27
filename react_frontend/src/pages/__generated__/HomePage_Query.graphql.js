/**
 * @flow
 * @relayHash c24a725342780947752a3c43736b575d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type studentListItem_student$ref = any;
export type HomePage_QueryVariables = {||};
export type HomePage_QueryResponse = {|
  +students: ?$ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: studentListItem_student$ref,
  |}>
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
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "HomePage_Query",
  "id": null,
  "text": "query HomePage_Query {\n  students {\n    id\n    ...studentListItem_student\n  }\n}\n\nfragment studentListItem_student on Student {\n  name\n}\n",
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7b38ae507eec63b9375b3f7cf966e609';
module.exports = node;
