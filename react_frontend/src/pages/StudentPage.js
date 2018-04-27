import React from 'react';
import LessonComponent from './../components/lesson';
import { graphql, QueryRenderer } from 'react-relay';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import environment from '../relay/environment';
import GoogleDocButton from '../components/googleDocButton';
import jwt_decode from 'jwt-decode';
import StudentLesson from '../components/studentLesson';
import { copyFile } from '../Gapi';

type Props = {
    /**/
  }

class StudentPage extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            isStudent: false,
        };
        console.log('hi');
        console.log(this.props);
        // console.log(this.props.location.state);
        // this.props.location.state= 'aria';
        // console.log('up');
        // console.log(jwt_decode(sessionStorage.getItem('token')).name);
        // console.log('up');
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
                                worksheetName
                                worksheetURL
                                notesName
                                notesURL
                            }
                            node(id: $studentId) {
                                ... on Student {
                                    worksheets {
                                        lessonID
                                        url
                                    }
                                    topScore
                                }
                            }
                        }
                    `}
                    variables={{ studentId: this.props.location.state != undefined ? this.props.location.state.student.id : '' }}
                    render={({ props }) => {
                        if (!props) {
                            return (
                                <div>Loading...</div>
                            );
                        }
                        return (
                            <div>
                                <StudentLesson
                                    isStudent={this.state.isStudent}
                                    studentWorksheets={props.node}
                                    lessons={props.lessons}
                                    location={this.props.location}
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
