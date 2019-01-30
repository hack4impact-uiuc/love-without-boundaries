/**
 * @flow
 * @relayHash 7cd9a9316cc8488d8eedbaa11966ac82
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AssignStudentToTeacherInput = {
  studentID?: ?string,
  teacherID?: ?string,
  clientMutationId?: ?string,
};
export type assignStudentToTeacherMutationVariables = {|
  input: AssignStudentToTeacherInput
|};
export type assignStudentToTeacherMutationResponse = {|
  +assignStudentToTeacher: ?{|
    +student: ?{|
      +name: ?string
    |}
  |}
|};
*/

/*
mutation assignStudentToTeacherMutation(
  $input: AssignStudentToTeacherInput!
) {
  assignStudentToTeacher(input: $input) {
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
                type: 'AssignStudentToTeacherInput!',
                defaultValue: null,
            },
        ],
        v1 = [
            {
                kind: 'Variable',
                name: 'input',
                variableName: 'input',
                type: 'AssignStudentToTeacherInput!',
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
        name: 'assignStudentToTeacherMutation',
        id: null,
        text:
            'mutation assignStudentToTeacherMutation(\n  $input: AssignStudentToTeacherInput!\n) {\n  assignStudentToTeacher(input: $input) {\n    student {\n      name\n      id\n    }\n  }\n}\n',
        metadata: {},
        fragment: {
            kind: 'Fragment',
            name: 'assignStudentToTeacherMutation',
            type: 'Mutation',
            metadata: null,
            argumentDefinitions: v0,
            selections: [
                {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'assignStudentToTeacher',
                    storageKey: null,
                    args: v1,
                    concreteType: 'AssignStudentToTeacherPayload',
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
            name: 'assignStudentToTeacherMutation',
            argumentDefinitions: v0,
            selections: [
                {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'assignStudentToTeacher',
                    storageKey: null,
                    args: v1,
                    concreteType: 'AssignStudentToTeacherPayload',
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
(node/*: any*/).hash = '1aa2c51af12c9a653573e6ad787e8996';
module.exports = node;
