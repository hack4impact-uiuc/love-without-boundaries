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
            lessonId: "TGVzc29uOjVhYzVhNzg0YmVkYTkyMTU4MzA0ODdlOQ==",
            question: {questionName: questionName,
                        answers : [ {answerName: a, isCorrect: "A" == correct},
                                    {answerName: b, isCorrect: "B" == correct},
                                    {answerName: c, isCorrect: "C" == correct},
                                    {answerName: d, isCorrect: "D" == correct} ]  
        }}
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