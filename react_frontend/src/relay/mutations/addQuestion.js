import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

const mutation = graphql`
    mutation addQuestionMutation($input: AddQuestionInput!) {
        addQuestion(input: $input){
            lesson {
                quiz {
                    questions{
                        questionName
                        answers{
                            answerName
                            isCorrect
                        }
                    }
                }
            }
        }
    }
`;

function addQuestion(environment: Environment, quizID: string, questionName: string, answers: [{string: string}]) {
    const variables = {
        input: {
            lessonId: quizID,
            question: {
                questionName,
                answers,
            },
        },
    };

    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                console.log('Response received from server. Question added.');
                console.log(response);
            },
            onError: err => console.error(err),
        },
    );
}

export default addQuestion;
