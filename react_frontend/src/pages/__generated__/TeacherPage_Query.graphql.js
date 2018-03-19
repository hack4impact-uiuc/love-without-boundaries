/**
 * @flow
 * @relayHash ca26f5414f32d047326453b9efb55b12
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TeacherPage_QueryVariables = {| |};
export type TeacherPage_QueryResponse = {|
  +students: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
  |}>,
|};
*/


/*
query TeacherPage_Query {
  students {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "students",
    "storageKey": null,
    "args": null,
    "concreteType": "Student",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TeacherPage_Query",
  "id": null,
  "text": "query TeacherPage_Query {\n  students {\n    id\n    name\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TeacherPage_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "TeacherPage_Query",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = '18dfb3e5ebfec458aff143c19594084b';
module.exports = node;
