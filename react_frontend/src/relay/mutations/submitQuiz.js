// @flow
import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

const mutation = graphql`
mutation submitQuizMutation(
    $input: SubmitQuizInput!
) {
    submitQuiz(input: $input){
        student {
            name
        }
        clientMutationId
    }
}
`;

function submitQuiz(environment: Environment, id: string, lessonID: string, questions: [string], answers: [string]) {
	const variables = {
		input: {
            id,
            lessonID,
            questions,
            answers
        }
    };
    console.log(variables);
    let finalRes = {};
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                console.log('Response received from server.');
                console.log(response)
                finalRes.res = response;
            },
            onError: err => console.error(err),
        },
    );
    return finalRes;
}

export default submitQuiz;