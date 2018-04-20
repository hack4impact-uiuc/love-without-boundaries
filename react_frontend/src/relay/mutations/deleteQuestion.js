// @flow

import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

const mutation = graphql`
    mutation deleteQuestionMutation($input: deleteQuestionInput!){
        deleteQuestion(input: $input){
            lesson{
                name
            }
        }
    }
`;

function deleteQuestion(environment: Environment, qID: ID) {
    const variables = {
        input: {
            questionId: qID,
            lessonId: 'TGVzc29uOjVhZDBlOWMwODEwYjg4MDgzMWMxZGEyZA==',
        },
    };

    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                console.log('Response received from server. Question removed.');
                console.log(response);
            },
            onError: err => console.error(err),
        },
    );
}

export default deleteQuestion;
