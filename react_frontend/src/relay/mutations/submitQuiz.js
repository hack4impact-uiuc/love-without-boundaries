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
            pastQuizzes {
                quizName
                submittedAnswers {
                    questionID
                    answerChosen
                }
            }
        }
    }
}
`;

function submitQuiz(environment: Environment, id: string, lessonID: string, questionIds: [string], chosenAnswers: [string]) {
    const submissions = [];
    let i;
    for (let i = 0; i < questionIds.length; i += 1) {
        submissions.push({ questionID: questionIds[i], answerChosen: chosenAnswers[i] });
    }
    const variables = {
        input: {
            lessonID,
            answeredQuestions: { submissions },
        },
    };
    let finalRes = {};
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response,errors) => {
                console.log('Response received from server.');
                console.log(response);
                finalRes.res = response;
            },
            onError: err => console.error(err),
        },
    );
    return finalRes;
}

export default submitQuiz;
