// @flow

import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

const mutation = graphql`
    mutation deleteLessonMutation(
        $input: DeleteLessonInput!
    ) {
        deleteLesson(input: $input){
            clientMutationId
        }
    }
`;

function deleteLesson(environment: Environment, id: string) {
	const variables = {
		input: {
            id
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

export default deleteLesson;