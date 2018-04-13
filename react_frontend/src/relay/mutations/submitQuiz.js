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
    }
}
`;

function submitQuiz(environment: Environment, id: string, lessonID: string, questionIds: [string], chosenAnswers: [string]) {
    const submissions = []
    var i;
    for (var i = 0; i < questionIds.length; i++) { 
        submissions.push({questionID: questionIds[i], answerChosen: chosenAnswers[i]})
    }
    // console.log(answeredQuestions)
	const variables = { input: {
            id,
            lessonID,
            answeredQuestions: {submissions}
        }
    };
    // console.log(variables2)

    // const variables = { input: {
    //     lessonID: "TGVzc29uOjVhY2E5YTJjMGM2Yzc1N2M0OGQ1ZmY1Yg==",
    //     id:"U3R1ZGVudDo1YWQwMWM5YWZkODFiNjg3YWYwYmM1NWQ=",
    //     answeredQuestions: {submissions:[
    //       {questionID:"5aced58421b8333d77e8e339", answerChosen:"4"}
    //     ]}      
    // }
    // }
    // console.log("variables");
    // console.log(variables);
    let finalRes = {};
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response,errors) => {
                console.log('Response received from server.');
                console.log(errors)
                console.log(response)
                finalRes.res = response;
            },
            onError: err => console.error(err),
        },
    );
    return finalRes;
}

export default submitQuiz;