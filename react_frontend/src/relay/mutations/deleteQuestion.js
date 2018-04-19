// @flow

import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

const mutation = graphql`
    mutation deleteQuestionMutation($input: DeleteQuestionInput!){
        deleteQuestion(input: $input){
            lesson{
                name
            }
        }
    }
`;

function deleteQuestion(environment: Environment, qID: string) {
	const variables = {
		input: {
            questionId: qID,
            lessonId: "TGVzc29uOjVhZDBlOWMwODEwYjg4MDgzMWMxZGEyZA==",
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

export default deleteQuestion;