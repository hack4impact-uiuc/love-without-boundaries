/**
 * @flow
 * @relayHash 8e5dd724ad0cfb886ef13f8e2ffff231
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type signinQueryVariables = {| |};
export type signinQueryResponse = {|
  +students: ?$ReadOnlyArray<?{|
    +name: ?string,
    +email: ?string,
    +id: string,
  |}>,
  +teachers: ?$ReadOnlyArray<?{|
    +name: ?string,
    +email: ?string,
    +id: string,
  |}>,
  +admins: ?$ReadOnlyArray<?{|
    +name: ?string,
    +email: ?string,
    +id: string,
  |}>,
|};
*/


/*
query signinQuery {
  students {
    name
    email
    id
  }
  teachers {
    name
    email
    id
  }
  admins {
    name
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
    "name": "name",
    "args": null,
    "storageKey": null
  },
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
  "text": "query signinQuery {\n  students {\n    name\n    email\n    id\n  }\n  teachers {\n    name\n    email\n    id\n  }\n  admins {\n    name\n    email\n    id\n  }\n}\n",
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
(node/*: any*/).hash = '284202f232ed71abb24c2ba657139291';
module.exports = node;
