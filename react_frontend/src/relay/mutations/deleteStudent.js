import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

const mutation = graphql`
    mutation deleteStudentMutation($input: DeleteStudentInput!) {
        deleteStudent(input: $input) {
            student {
                name
            }
        }
    }
`;

function deleteStudent(environment: Environment, id: string) {
    const variables = {
        input: {
            id,
        },
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: response => {
            console.log('Response received from server.');
        },
        onError: err => console.error(err),
    });
}

export default deleteStudent;
