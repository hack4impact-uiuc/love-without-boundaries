// @flow

import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

const mutation = graphql`
    mutation addLessonMutation(
        $input: CreateLessonInput!
    ) {
        createLesson(input: $input){
            lesson {
                id
            }
            clientMutationId
        }
    }
`;

function addLesson(environment: Environment, name: string, worksheetURL: string, notesURL: string) {
    const variables = {
        input: {
            name,
            worksheetURL,
            notesURL,
        },
    };
    let finalResponse = {};
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                console.log('Hello');
                finalResponse = response;
            },
            onError: err => console.error(err),
        },
    );
    return finalResponse;
}

export default addLesson;
