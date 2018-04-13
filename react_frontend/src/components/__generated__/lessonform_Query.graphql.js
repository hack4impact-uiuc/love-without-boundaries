/**
 * @flow
 * @relayHash 01aa0fc94eca9435765a143c3ccb134b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type lessonform_QueryVariables = {| |};
export type lessonform_QueryResponse = {|
  +students: ?$ReadOnlyArray<?{|
    +id: string,
  |}>,
|};
*/


/*
query lessonform_Query {
  students {
    id
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "lessonform_Query",
  "id": null,
  "text": "query lessonform_Query {\n  students {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "lessonform_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "lessonform_Query",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = 'aafca873aff2475811b91eba7d58bf69';
module.exports = node;
