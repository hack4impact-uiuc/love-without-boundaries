/**
 * @flow
 * @relayHash 8fe2b936790dfbad2d25627bb0acfec5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteTeacherInput = {
  id: string,
  clientMutationId?: ?string,
};
export type deleteTeacherMutationVariables = {|
  input: DeleteTeacherInput
|};
export type deleteTeacherMutationResponse = {|
  +deleteTeacher: ?{|
    +teacher: ?{|
      +name: ?string
    |}
  |}
|};
*/

/*
mutation deleteTeacherMutation(
  $input: DeleteTeacherInput!
) {
  deleteTeacher(input: $input) {
    teacher {
      name
      id
    }
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
    var v0 = [
            {
                kind: 'LocalArgument',
                name: 'input',
                type: 'DeleteTeacherInput!',
                defaultValue: null,
            },
        ],
        v1 = [
            {
                kind: 'Variable',
                name: 'input',
                variableName: 'input',
                type: 'DeleteTeacherInput!',
            },
        ],
        v2 = {
            kind: 'ScalarField',
            alias: null,
            name: 'name',
            args: null,
            storageKey: null,
        };
    return {
        kind: 'Request',
        operationKind: 'mutation',
        name: 'deleteTeacherMutation',
        id: null,
        text:
            'mutation deleteTeacherMutation(\n  $input: DeleteTeacherInput!\n) {\n  deleteTeacher(input: $input) {\n    teacher {\n      name\n      id\n    }\n  }\n}\n',
        metadata: {},
        fragment: {
            kind: 'Fragment',
            name: 'deleteTeacherMutation',
            type: 'Mutation',
            metadata: null,
            argumentDefinitions: v0,
            selections: [
                {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'deleteTeacher',
                    storageKey: null,
                    args: v1,
                    concreteType: 'DeleteTeacherPayload',
                    plural: false,
                    selections: [
                        {
                            kind: 'LinkedField',
                            alias: null,
                            name: 'teacher',
                            storageKey: null,
                            args: null,
                            concreteType: 'Teacher',
                            plural: false,
                            selections: [v2],
                        },
                    ],
                },
            ],
        },
        operation: {
            kind: 'Operation',
            name: 'deleteTeacherMutation',
            argumentDefinitions: v0,
            selections: [
                {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'deleteTeacher',
                    storageKey: null,
                    args: v1,
                    concreteType: 'DeleteTeacherPayload',
                    plural: false,
                    selections: [
                        {
                            kind: 'LinkedField',
                            alias: null,
                            name: 'teacher',
                            storageKey: null,
                            args: null,
                            concreteType: 'Teacher',
                            plural: false,
                            selections: [
                                v2,
                                {
                                    kind: 'ScalarField',
                                    alias: null,
                                    name: 'id',
                                    args: null,
                                    storageKey: null,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    };
})();
// prettier-ignore
(node/*: any*/).hash = 'cc58c36a0c0c3eba437fbacf73f403ff';
module.exports = node;
