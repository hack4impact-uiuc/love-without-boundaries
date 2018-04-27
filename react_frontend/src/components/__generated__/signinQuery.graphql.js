/**
 * @flow
 * @relayHash 1003a5d4141a2a433e6b6f4d0ba85a55
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type signinQueryVariables = {| |};
export type signinQueryResponse = {|
  +students: ?$ReadOnlyArray<?{|
    +email: ?string,
    +id: string,
  |}>,
  +teachers: ?$ReadOnlyArray<?{|
    +email: ?string,
    +id: string,
  |}>,
  +admins: ?$ReadOnlyArray<?{|
    +email: ?string,
    +id: string,
  |}>,
|};
*/


/*
query signinQuery {
  students {
    email
    id
  }
  teachers {
    email
    id
  }
  admins {
    email
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "email",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "students",
    "storageKey": null,
    "args": null,
    "concreteType": "Student",
    "plural": true,
    "selections": v0
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "teachers",
    "storageKey": null,
    "args": null,
    "concreteType": "Teacher",
    "plural": true,
    "selections": v0
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "admins",
    "storageKey": null,
    "args": null,
    "concreteType": "Admin",
    "plural": true,
    "selections": v0
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "signinQuery",
  "id": null,
  "text": "query signinQuery {\n  students {\n    email\n    id\n  }\n  teachers {\n    email\n    id\n  }\n  admins {\n    email\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "signinQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "signinQuery",
    "argumentDefinitions": [],
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '31bbc5be1de0e05c1abed834c5dfedd0';
module.exports = node;
