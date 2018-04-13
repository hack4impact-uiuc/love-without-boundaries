import { commitMutation, graphql } from 'react-relay';
import type { Environment } from 'relay-runtime';

const mutation = graphql`
    mutation assignStudentToTeacherMutation($input: AssignStudentToTeacherInput!) {
      assignStudentToTeacher(input: $input){
        student {
          name
        }
      }
    }
            
`;

function assignStudentToTeacher(environment: Environment, studentID: string, teacherID: string) {
const variables = {
  input: {
    studentID,
    teacherID,
  },
};
console.log(variables)
commitMutation(
  environment,
  {
    mutation,
    variables,
    onCompleted: (response) => {
      console.log('Response received from server.')
      console.log(response)
    },
    onError: err => console.error(err),
  },
);
}

export default assignStudentToTeacher;
