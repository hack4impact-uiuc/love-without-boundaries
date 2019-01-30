/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type quizListItem_question$ref: FragmentReference;
export type quizListItem_question = {|
  +questions: ?$ReadOnlyArray<?{|
    +questionName: ?string
  |}>,
  +$refType: quizListItem_question$ref,
|};
*/

const node /*: ConcreteFragment*/ = {
    kind: 'Fragment',
    name: 'quizListItem_question',
    type: 'Quiz',
    metadata: null,
    argumentDefinitions: [],
    selections: [
        {
            kind: 'LinkedField',
            alias: null,
            name: 'questions',
            storageKey: null,
            args: null,
            concreteType: 'Question',
            plural: true,
            selections: [
                {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'questionName',
                    args: null,
                    storageKey: null,
                },
            ],
        },
    ],
};
// prettier-ignore
(node/*: any*/).hash = '427f4a3094e4079ae0e83c599a8278b8';
module.exports = node;
