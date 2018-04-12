// @flow
import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

const mutation = graphql
`mutation submitQuizMutation(
    $input: SubmitQuizInput!
) {
    submitQuiz(input: $input){
        student {
            name
        }
        clientMutationId
    }
} `
;

function submitQuiz(environment: Environment, id: string, lessonID: string, questions: [string], answers: [string]) {
	const variables = {
		input: {
                        id,
                        lessonID,
                        questions,
                        answers
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

export default submitQuiz;