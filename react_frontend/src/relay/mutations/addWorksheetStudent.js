// @flow

import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

const mutation = graphql`
    mutation addWorksheetStudentMutation(
        $input: AddStudentWorksheetCopyInput!
    ) {
        AddStudentWorksheetCopy(input: $input){
            clientMutationId
        }
    }
`;

function addWorksheetStudent(environment: Environment, studentID: string, lessonID: string, url: string) {
	const variables = {
		input: {
            studentID,
            lessonID,
            url,
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

export default addWorksheetStudent;