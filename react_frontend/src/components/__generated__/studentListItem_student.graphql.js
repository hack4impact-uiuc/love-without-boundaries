/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type studentListItem_student$ref: FragmentReference;
export type studentListItem_student = {|
  +id: string,
  +name: ?string,
  +teacher: ?{|
    +name: ?string,
  |},
  +$refType: studentListItem_student$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "studentListItem_student",
  "type": "Student",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "teacher",
      "storageKey": null,
      "args": null,
      "concreteType": "Teacher",
      "plural": false,
      "selections": [
        v0
      ]
    }
  ]
};
})();
(node/*: any*/).hash = '51d162558b27e724d85bbc030ed80f88';
module.exports = node;
