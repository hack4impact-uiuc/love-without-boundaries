// @flow

import { commitMutation, graphql } from 'react-relay';
import typeimport AddLesson from '../../components/addlesson';
 { Environment } from 'relay-runtime';

const mutation = graphql`
    mutation addLessonMutation(
        $input: CreateLessonInput!
    ) {
        createLesson(input: $input){
            lesson {
                name
            }
        }
    }
`;

function createLesson(environment: Environment, name: string, quiz: string, worksheetName: string, worksheetURL: string, notesName: string, notesURL: string) {
	const variables = {
		input: {
            name,
            quiz,
            worksheetName,
            worksheetURL,
            notesName,
            notesURL
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

export default addLesson;