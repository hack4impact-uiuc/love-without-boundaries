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

function submitQuiz(environment: Environment, studentID: string, quizID: string, questionIds: [string], chosenAnswers: [string]) {
    const mysubmissions = [];
    for (let i = 0; i < questionIds.length; i += 1) {
        mysubmissions.push({ questionID: questionIds[i], answerChosen: chosenAnswers[i] });
    }
    console.log(mysubmissions);
    const variables = {
        input: {
            id: studentID,
            lessonID: quizID,
            answeredQuestions: { submissions: mysubmissions },
        },
    };

    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response) => {
                console.log('Response received from server. Quiz submitted.');
                console.log(response);
            },
            onError: err => console.error(err),
        },
    );
}

export default submitQuiz;
