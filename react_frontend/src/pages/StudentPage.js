import React from 'react';
import LessonComponent from './../components/lesson';
import { graphql, QueryRenderer } from 'react-relay';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import environment from '../relay/environment';
import GoogleDocButton from '../components/googleDocButton';
import jwtDecode from 'jwt-decode';
import StudentLesson from '../components/studentLesson';
import { copyFile } from '../Gapi';

type Props = {
    /**/
  }

class StudentPage extends React.Component<Props> {
    getStudentId = () => {
        const { location } = this.props;
        if (location.state !== undefined && location.state.student !== undefined) {
            return location.state.student.id;
        }
        return p ? jwtDecode(sessionStorage.getItem('token')).id : '';
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
                                    worksheets {
                                        lessonID
                                        url
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
                            return <h4 className="page-error">You must be logged in to see this. Please try again.</h4>;
                        }
                        const token = jwtDecode(sessionStorage.getItem('token'));
                        const userType = token !== null ? token.userType : 'none';
                        console.log(token);
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
