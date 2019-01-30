// @flow

import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

const mutation = graphql`
    mutation addLessonMutation($input: CreateLessonInput!) {
        createLesson(input: $input) {
            lesson {
                id
            }
            clientMutationId
        }
    }
`;

function addLesson(
    environment: Environment,
    name: string,
    worksheetURL: string,
    notesURL: string,
) {
    const variables = {
        input: {
            name,
            worksheetURL,
            notesURL,
        },
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: response => {
            console.log('AddLesson mutation: response Recieved from Server.');
        },
        onError: err => console.error(err),
    });
}

export default addLesson;
