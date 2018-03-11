/**
 * @flow
 * @relayHash fde9fa032d67db2bf99b4b2ff4701775
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type studentListItem_student$ref = any;
export type TeacherPage_QueryVariables = {| |};
export type TeacherPage_QueryResponse = {|
  +students: ?$ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: studentListItem_student$ref,
  |}>,
|};
*/


/*
query TeacherPage_Query {
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
  "name": "TeacherPage_Query",
  "id": null,
  "text": "query TeacherPage_Query {\n  students {\n    id\n    ...studentListItem_student\n  }\n}\n\nfragment studentListItem_student on Student {\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TeacherPage_Query",
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
    "name": "TeacherPage_Query",
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
(node/*: any*/).hash = 'e16167f57e8c700a2b17fd428c812b26';
module.exports = node;
