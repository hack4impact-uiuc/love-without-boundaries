import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

function assignTeacher(environment: Environment, studentID: string, teacherID: string, mutation) {
console.log('its happenin!')
const variables = {
  input: {
    studentID,
    teacherID,
  },
};
commitMutation(
  environment,
  {
    mutation,
    variables,
    onCompleted: (response) => {
      console.log('Response received from server.')
    },
    onError: err => console.error(err),
  },
);
}

export default assignTeacher;
