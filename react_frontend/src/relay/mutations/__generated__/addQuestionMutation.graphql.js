/**
 * @flow
 * @relayHash 3a3b60ce079e80cf3512528a1b6a9fb0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddQuestionInput = {
  question?: ?InputQuestion,
  lessonId?: ?string,
  clientMutationId?: ?string,
};
export type InputQuestion = {
  questionName?: ?string,
  answers?: ?$ReadOnlyArray<?InputAnswer>,
};
export type InputAnswer = {
  answerName?: ?string,
  isCorrect?: ?boolean,
};
export type addQuestionMutationVariables = {|
  input: AddQuestionInput
|};
export type addQuestionMutationResponse = {|
  +addQuestion: ?{|
    +lesson: ?{|
      +quiz: ?{|
        +questions: ?$ReadOnlyArray<?{|
          +questionName: ?string,
          +answers: ?$ReadOnlyArray<?{|
            +answerName: ?string,
            +isCorrect: ?boolean,
          |}>,
        |}>
      |}
    |}
  |}
|};
*/

/*
mutation addQuestionMutation(
  $input: AddQuestionInput!
) {
  addQuestion(input: $input) {
    lesson {
      quiz {
        questions {
          questionName
          answers {
            answerName
            isCorrect
          }
          id
        }
      }
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
                type: 'AddQuestionInput!',
                defaultValue: null,
            },
        ],
        v1 = [
            {
                kind: 'Variable',
                name: 'input',
                variableName: 'input',
                type: 'AddQuestionInput!',
            },
        ],
        v2 = {
            kind: 'ScalarField',
            alias: null,
            name: 'questionName',
            args: null,
            storageKey: null,
        },
        v3 = {
            kind: 'LinkedField',
            alias: null,
            name: 'answers',
            storageKey: null,
            args: null,
            concreteType: 'Answer',
            plural: true,
            selections: [
                {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'answerName',
                    args: null,
                    storageKey: null,
                },
                {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'isCorrect',
                    args: null,
                    storageKey: null,
                },
            ],
        },
        v4 = {
            kind: 'ScalarField',
            alias: null,
            name: 'id',
            args: null,
            storageKey: null,
        };
    return {
        kind: 'Request',
        operationKind: 'mutation',
        name: 'addQuestionMutation',
        id: null,
        text:
            'mutation addQuestionMutation(\n  $input: AddQuestionInput!\n) {\n  addQuestion(input: $input) {\n    lesson {\n      quiz {\n        questions {\n          questionName\n          answers {\n            answerName\n            isCorrect\n          }\n          id\n        }\n      }\n      id\n    }\n  }\n}\n',
        metadata: {},
        fragment: {
            kind: 'Fragment',
            name: 'addQuestionMutation',
            type: 'Mutation',
            metadata: null,
            argumentDefinitions: v0,
            selections: [
                {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'addQuestion',
                    storageKey: null,
                    args: v1,
                    concreteType: 'AddQuestionPayload',
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
                                {
                                    kind: 'LinkedField',
                                    alias: null,
                                    name: 'quiz',
                                    storageKey: null,
                                    args: null,
                                    concreteType: 'Quiz',
                                    plural: false,
                                    selections: [
                                        {
                                            kind: 'LinkedField',
                                            alias: null,
                                            name: 'questions',
                                            storageKey: null,
                                            args: null,
                                            concreteType: 'Question',
                                            plural: true,
                                            selections: [v2, v3],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        operation: {
            kind: 'Operation',
            name: 'addQuestionMutation',
            argumentDefinitions: v0,
            selections: [
                {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'addQuestion',
                    storageKey: null,
                    args: v1,
                    concreteType: 'AddQuestionPayload',
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
                                {
                                    kind: 'LinkedField',
                                    alias: null,
                                    name: 'quiz',
                                    storageKey: null,
                                    args: null,
                                    concreteType: 'Quiz',
                                    plural: false,
                                    selections: [
                                        {
                                            kind: 'LinkedField',
                                            alias: null,
                                            name: 'questions',
                                            storageKey: null,
                                            args: null,
                                            concreteType: 'Question',
                                            plural: true,
                                            selections: [v2, v3, v4],
                                        },
                                    ],
                                },
                                v4,
                            ],
                        },
                    ],
                },
            ],
        },
    };
})();
// prettier-ignore
(node/*: any*/).hash = '144c569ff356bda9802a5dcf1e2c9932';
module.exports = node;
