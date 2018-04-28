import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import jwtDecode from 'jwt-decode';
import { withRouter } from 'react-router-dom';
import environment from '../relay/environment';
import StudentLesson from '../components/studentLesson';
import ErrorMessage from '../components/errorMessage';

type Props = {
    /**/
  }

class StudentPage extends React.Component<Props> {
    getStudentId = () => {
        const { location } = this.props;
        if (location.state !== undefined && location.state.student !== undefined) {
            return location.state.student.id;
        }
        return jwtDecode(sessionStorage.getItem('token')) ? jwtDecode(sessionStorage.getItem('token')).id : '';
    }
    render() {
        return (
            <div>
                <QueryRenderer
                    environment={environment}
                    query={graphql`
                        query StudentPage_Query($studentId: ID!){
                            lessons{
                                id
                                name
                                worksheetURL
                                notesURL
                            }
                            node(id: $studentId) {
                                ... on Student {
                                    name
                                    email
                                    worksheets {
                                        lessonID
                                        url
                                    }
                                    grades {
                                        lessonID
                                        score
                                    }
                                    id
                                    URL
                                }
                            }
                        }
                    `}
                    variables={{ studentId: this.getStudentId() }}
                    render={({ props }) => {
                        if (!props) {
                            return (
                                <div>Loading...</div>
                            );
                        }
                        if (props.node === null || Object.keys(props.node).length === 0) {
                            return <ErrorMessage code="404" message="You must be logged in to see this. Please try again." />;
                        }
                        const token = jwtDecode(sessionStorage.getItem('token'));
                        if (token === null || !token) {
                            return <ErrorMessage code="404" message="You must be logged in to see this. Please try again." />;
                        }
                        const userType = token !== null ? token.userType : 'none';
                        return (
                            <div>
                                <StudentLesson
                                    isStudent={userType === 'student'}
                                    student={props.node}
                                    lessons={props.lessons}
                                />
                            </div>
                        );
                    }}
                />
            </div>
        );
    }
}


export default withRouter(StudentPage);
