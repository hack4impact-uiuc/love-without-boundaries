/**
 * @flow
 * @relayHash 786b5ae42d85e959a8d92e16d945dba7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteQuestionInput = {
  questionId: string,
  lessonId: string,
  clientMutationId?: ?string,
};
export type deleteQuestionMutationVariables = {|
  input: deleteQuestionInput
|};
export type deleteQuestionMutationResponse = {|
  +deleteQuestion: ?{|
    +lesson: ?{|
      +name: ?string
    |}
  |}
|};
*/

/*
mutation deleteQuestionMutation(
  $input: deleteQuestionInput!
) {
  deleteQuestion(input: $input) {
    lesson {
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
                type: 'deleteQuestionInput!',
                defaultValue: null,
            },
        ],
        v1 = [
            {
                kind: 'Variable',
                name: 'input',
                variableName: 'input',
                type: 'deleteQuestionInput!',
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
        name: 'deleteQuestionMutation',
        id: null,
        text:
            'mutation deleteQuestionMutation(\n  $input: deleteQuestionInput!\n) {\n  deleteQuestion(input: $input) {\n    lesson {\n      name\n      id\n    }\n  }\n}\n',
        metadata: {},
        fragment: {
            kind: 'Fragment',
            name: 'deleteQuestionMutation',
            type: 'Mutation',
            metadata: null,
            argumentDefinitions: v0,
            selections: [
                {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'deleteQuestion',
                    storageKey: null,
                    args: v1,
                    concreteType: 'deleteQuestionPayload',
                    plural: false,
                    selections: [
                        {
                            kind: 'LinkedField',
                            alias: null,
                            name: 'lesson',
                            storageKey: null,
                            args: null,
                            concreteType: 'Lesson',
                            plural: false,
                            selections: [v2],
                        },
                    ],
                },
            ],
        },
        operation: {
            kind: 'Operation',
            name: 'deleteQuestionMutation',
            argumentDefinitions: v0,
            selections: [
                {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'deleteQuestion',
                    storageKey: null,
                    args: v1,
                    concreteType: 'deleteQuestionPayload',
                    plural: false,
                    selections: [
                        {
                            kind: 'LinkedField',
                            alias: null,
                            name: 'lesson',
                            storageKey: null,
                            args: null,
                            concreteType: 'Lesson',
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
(node/*: any*/).hash = '51f7dabc565b3958334f6723882d469a';
module.exports = node;
