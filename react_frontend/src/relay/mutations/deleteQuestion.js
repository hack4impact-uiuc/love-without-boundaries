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

function deleteQuestion(environment: Environment, quizID : string, qID: ID) {
    const variables = {
        input: {
            questionId: qID,
            lessonId: quizID,
        },
    };

    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                console.log('Response received from server. Question removed.');
            },
            onError: err => console.error(err),
        },
    );
}

export default deleteQuestion;
