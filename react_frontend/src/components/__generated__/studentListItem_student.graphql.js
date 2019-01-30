/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type studentListItem_student$ref: FragmentReference;
export type studentListItem_student = {|
  +name: ?string,
  +$refType: studentListItem_student$ref,
|};
*/

const node /*: ConcreteFragment*/ = {
    kind: 'Fragment',
    name: 'studentListItem_student',
    type: 'Student',
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
(node/*: any*/).hash = '650f99dca902f4ebfeea903cf75dbd5b';
module.exports = node;
