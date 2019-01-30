/**
 * @flow
 * @relayHash 8c4c8ba85881c75a8904b60edf4fafb3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateStudentInput = {
  name: string,
  email: string,
  token: string,
  clientMutationId?: ?string,
};
export type addStudentMutationVariables = {|
  input: CreateStudentInput
|};
export type addStudentMutationResponse = {|
  +createStudent: ?{|
    +student: ?{|
      +name: ?string
    |}
  |}
|};
*/

/*
mutation addStudentMutation(
  $input: CreateStudentInput!
) {
  createStudent(input: $input) {
    student {
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
                type: 'CreateStudentInput!',
                defaultValue: null,
            },
        ],
        v1 = [
            {
                kind: 'Variable',
                name: 'input',
                variableName: 'input',
                type: 'CreateStudentInput!',
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
        name: 'addStudentMutation',
        id: null,
        text:
            'mutation addStudentMutation(\n  $input: CreateStudentInput!\n) {\n  createStudent(input: $input) {\n    student {\n      name\n      id\n    }\n  }\n}\n',
        metadata: {},
        fragment: {
            kind: 'Fragment',
            name: 'addStudentMutation',
            type: 'Mutation',
            metadata: null,
            argumentDefinitions: v0,
            selections: [
                {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'createStudent',
                    storageKey: null,
                    args: v1,
                    concreteType: 'CreateStudentPayload',
                    plural: false,
                    selections: [
                        {
                            kind: 'LinkedField',
                            alias: null,
                            name: 'student',
                            storageKey: null,
                            args: null,
                            concreteType: 'Student',
                            plural: false,
                            selections: [v2],
                        },
                    ],
                },
            ],
        },
        operation: {
            kind: 'Operation',
            name: 'addStudentMutation',
            argumentDefinitions: v0,
            selections: [
                {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'createStudent',
                    storageKey: null,
                    args: v1,
                    concreteType: 'CreateStudentPayload',
                    plural: false,
                    selections: [
                        {
                            kind: 'LinkedField',
                            alias: null,
                            name: 'student',
                            storageKey: null,
                            args: null,
                            concreteType: 'Student',
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
(node/*: any*/).hash = 'c746901b72605e4ddf14a71878899990';
module.exports = node;
