import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

const mutation = graphql`
    mutation addStudentMutation($input: CreateStudentInput!) {
        createStudent(input: $input) {
            student {
                name
            }
        }
    }
`;

function addStudent(environment: Environment, name: string, email: string) {
    const variables = {
        input: {
            name,
            email,
        },
    };

    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: response => {
            console.log('addStudent Mutation: Response received from server.');
        },
        onError: err => console.error(err),
    });
}

export default addStudent;
