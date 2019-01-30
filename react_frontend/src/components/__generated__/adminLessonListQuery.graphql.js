/**
 * @flow
 * @relayHash 6b1853da454c2e7f583e215445995e07
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type adminLessonListQueryVariables = {||};
export type adminLessonListQueryResponse = {|
  +lessons: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +worksheetURL: ?string,
    +notesURL: ?string,
  |}>
|};
*/

/*
query adminLessonListQuery {
  lessons {
    id
    name
    worksheetURL
    notesURL
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
    var v0 = [
        {
            kind: 'LinkedField',
            alias: null,
            name: 'lessons',
            storageKey: null,
            args: null,
            concreteType: 'Lesson',
            plural: true,
            selections: [
                {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'id',
                    args: null,
                    storageKey: null,
                },
                {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'name',
                    args: null,
                    storageKey: null,
                },
                {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'worksheetURL',
                    args: null,
                    storageKey: null,
                },
                {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'notesURL',
                    args: null,
                    storageKey: null,
                },
            ],
        },
    ];
    return {
        kind: 'Request',
        operationKind: 'query',
        name: 'adminLessonListQuery',
        id: null,
        text:
            'query adminLessonListQuery {\n  lessons {\n    id\n    name\n    worksheetURL\n    notesURL\n  }\n}\n',
        metadata: {},
        fragment: {
            kind: 'Fragment',
            name: 'adminLessonListQuery',
            type: 'Query',
            metadata: null,
            argumentDefinitions: [],
            selections: v0,
        },
        operation: {
            kind: 'Operation',
            name: 'adminLessonListQuery',
            argumentDefinitions: [],
            selections: v0,
        },
    };
})();
// prettier-ignore
(node/*: any*/).hash = '69d58ad1f77e8c0c6e4a74543ba9f3e8';
module.exports = node;
