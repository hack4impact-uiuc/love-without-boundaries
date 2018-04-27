/**
 * @flow
 * @relayHash 6b2558a4f38b26a2d2a6f7058abf4df8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type studentListItem_student$ref = any;
type teacherListItem_teacher$ref = any;
export type adminList_QueryVariables = {| |};
export type adminList_QueryResponse = {|
  +students: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +$fragmentRefs: studentListItem_student$ref,
  |}>,
  +teachers: ?$ReadOnlyArray<?{|
    +name: ?string,
    +id: string,
    +$fragmentRefs: teacherListItem_teacher$ref,
  |}>,
|};
*/


/*
query adminList_Query {
  students {
    id
    name
    ...studentListItem_student
  }
  teachers {
    name
    id
    ...teacherListItem_teacher
  }
}

fragment studentListItem_student on Student {
  name
}

fragment teacherListItem_teacher on Teacher {
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
  "name": "adminList_Query",
  "id": null,
  "text": "query adminList_Query {\n  students {\n    id\n    name\n    ...studentListItem_student\n  }\n  teachers {\n    name\n    id\n    ...teacherListItem_teacher\n  }\n}\n\nfragment studentListItem_student on Student {\n  name\n}\n\nfragment teacherListItem_teacher on Teacher {\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "adminList_Query",
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
          v1,
          {
            "kind": "FragmentSpread",
            "name": "studentListItem_student",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "teachers",
        "storageKey": null,
        "args": null,
        "concreteType": "Teacher",
        "plural": true,
        "selections": [
          v1,
          v0,
          {
            "kind": "FragmentSpread",
            "name": "teacherListItem_teacher",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "adminList_Query",
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
          v1
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "teachers",
        "storageKey": null,
        "args": null,
        "concreteType": "Teacher",
        "plural": true,
        "selections": [
          v1,
          v0
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '0ae94c7b28901d0e7c27953369361a86';
module.exports = node;
