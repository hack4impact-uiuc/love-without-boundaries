/**
 * @flow
 * @relayHash 05c6516a6638f3377bc4498378d81109
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditLessonInput = {
  id?: ?string,
  newName?: ?string,
  clientMutationId?: ?string,
};
export type editLessonMutationVariables = {|
  input: EditLessonInput
|};
export type editLessonMutationResponse = {|
  +editLesson: ?{|
    +lesson: ?{|
      +name: ?string
    |}
  |}
|};
*/

/*
mutation editLessonMutation(
  $input: EditLessonInput!
) {
  editLesson(input: $input) {
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
                type: 'EditLessonInput!',
                defaultValue: null,
            },
        ],
        v1 = [
            {
                kind: 'Variable',
                name: 'input',
                variableName: 'input',
                type: 'EditLessonInput!',
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
        name: 'editLessonMutation',
        id: null,
        text:
            'mutation editLessonMutation(\n  $input: EditLessonInput!\n) {\n  editLesson(input: $input) {\n    lesson {\n      name\n      id\n    }\n  }\n}\n',
        metadata: {},
        fragment: {
            kind: 'Fragment',
            name: 'editLessonMutation',
            type: 'Mutation',
            metadata: null,
            argumentDefinitions: v0,
            selections: [
                {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'editLesson',
                    storageKey: null,
                    args: v1,
                    concreteType: 'EditLessonPayload',
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
            name: 'editLessonMutation',
            argumentDefinitions: v0,
            selections: [
                {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'editLesson',
                    storageKey: null,
                    args: v1,
                    concreteType: 'EditLessonPayload',
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
(node/*: any*/).hash = 'd25272b898d61d2b70b8ca882430e3a5';
module.exports = node;
