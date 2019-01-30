import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

const mutation = graphql`
    mutation editLessonMutation($input: EditLessonInput!) {
        editLesson(input: $input) {
            lesson {
                name
            }
        }
    }
`;

function editLesson(environment: Environment, lessonID: string, name: string) {
    const variables = {
        input: {
            id: lessonID,
            newName: name,
        },
    };

    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: response => {
            console.log('Response received from server. Lesson name changed.');
        },
        onError: err => console.error(err),
    });
}

export default editLesson;
