// @flow

import { commitMutation, graphql } from 'react-relay';

import type { Environment } from 'relay-runtime';

const mutation = graphql`
    mutation addStudentMutation($name: String!) {
        createStudent(name: $name){
            name
        }
    }
`;

function addStudent(environment: Environment, name: string) {
  const variables = {
    name,
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

export default addStudent
;