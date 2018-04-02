import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

const mutation = graphql`
    mutation addQuestionMutation($input: AddQuestionInput!) {
        addQuestion(input: $input){
            lesson {
                quiz {
                    questions{
                        questionName
                    }
                }
            }
        }
    }
`;

function addQuestion(environment: Environment, questionName: string, a: string, b: string, c: string, d: string, correct: string) {
    const variables = {
		input: {
            questionName,
            answers : [ {answerName: a, isCorrect: "a" == correct},
                        {answerName: b, isCorrect: "b" == correct},
                        {answerName: c, isCorrect: "c" == correct},
                        {answerName: d, isCorrect: "d" == correct} ]  
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

export default addQuestion;