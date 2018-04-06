// @flow

import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

const mutation = graphql`
    mutation addLessonMutation(
        $input: CreateLessonInput!
    ) {
        createLesson(input: $input){
            admin {
                name
            }
            clientMutationId
        }
    }
`;

function addLesson(environment: Environment, name: string, worksheetName: string, worksheetURL: string, notesName: string, notesURL: string) {
	const variables = {
		input: {
            name,
            worksheetName,
            worksheetURL,
            notesName,
            notesURL
        }
	};

  commitMutation(
    environment,
    {
		mutation,
		variables,
		onCompleted: (response) => {
			console.log('Response received from server.');
		},
		onError: err => console.error(err),
    },
  );
}

export default addLesson;