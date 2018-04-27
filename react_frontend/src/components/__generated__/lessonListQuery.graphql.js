/**
 * @flow
 * @relayHash 425c1f95fce320677a1f1a3cefcfd557
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type lessonListQueryVariables = {| |};
export type lessonListQueryResponse = {|
  +lessons: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +worksheetURL: ?string,
    +notesURL: ?string,
  |}>,
|};
*/


/*
query lessonListQuery {
  lessons {
    id
    name
    worksheetURL
    notesURL
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "lessons",
    "storageKey": null,
    "args": null,
    "concreteType": "Lesson",
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
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "worksheetURL",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "notesURL",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "lessonListQuery",
  "id": null,
  "text": "query lessonListQuery {\n  lessons {\n    id\n    name\n    worksheetURL\n    notesURL\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "lessonListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "lessonListQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = '3259e3bf618c212b07c1cbff156e75b4';
module.exports = node;
