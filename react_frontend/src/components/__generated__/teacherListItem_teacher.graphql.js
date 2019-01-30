/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type teacherListItem_teacher$ref: FragmentReference;
export type teacherListItem_teacher = {|
  +name: ?string,
  +$refType: teacherListItem_teacher$ref,
|};
*/

const node /*: ConcreteFragment*/ = {
    kind: 'Fragment',
    name: 'teacherListItem_teacher',
    type: 'Teacher',
    metadata: null,
    argumentDefinitions: [],
    selections: [
        {
            kind: 'ScalarField',
            alias: null,
            name: 'name',
            args: null,
            storageKey: null,
        },
    ],
};
// prettier-ignore
(node/*: any*/).hash = 'e8d504b5f3ad2f2fc99bc9c1b88645db';
module.exports = node;
