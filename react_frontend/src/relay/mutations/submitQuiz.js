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
    const submissions = []
    var i;
    for (var i = 0; i < questionIds.length; i++) { 
        submissions.push({questionID: questionIds[i], answerChosen: chosenAnswers[i]})
    }
	const variables = { input: {
            id,
            lessonID,
            answeredQuestions: {submissions}
        }
    };
    let finalRes = {};
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response,errors) => {
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