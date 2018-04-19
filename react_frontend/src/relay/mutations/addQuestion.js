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

function addQuestion(environment: Environment, questionName: string, answers: [{string: string}]) {
    const variables = {
		input: {
            lessonId: "TGVzc29uOjVhZDBlOWMwODEwYjg4MDgzMWMxZGEyZA==",
            question: {questionName: questionName,
                        answers : answers 
        }}
	};

  commitMutation(
    environment,
    {
		mutation,
		variables,
		onCompleted: (response) => {
            console.log('Response received from server.');
            console.log(response);
		},
		onError: err => console.error(err),
    },
  );
}

export default addQuestion;