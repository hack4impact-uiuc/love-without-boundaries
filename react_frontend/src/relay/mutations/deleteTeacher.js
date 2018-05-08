import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

const mutation = graphql`
    mutation deleteTeacherMutation($input: DeleteTeacherInput!) {
      deleteTeacher(input: $input){
        teacher {
          name
        }
      }
    }
`;

function deleteTeacher(environment: Environment, id: string) {
    const variables = {
        input: {
            id,
        },
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

export default deleteTeacher;
