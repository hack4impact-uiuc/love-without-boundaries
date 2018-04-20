import React from 'react';
import LessonComponent from './../components/lesson';
import { graphql, QueryRenderer } from 'react-relay';
import { BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import environment from '../relay/environment';
import GoogleDocButton from '../components/googleDocButton'
import jwt_decode from 'jwt-decode';
import StudentLesson from '../components/studentLesson'
import {copyFile} from '../Gapi'

type Props = {
    /**/
  }

class StudentPage extends React.Component<Props>{

    constructor(props){
        super(props);
        this.state = {
            title: "My Lessons",
            isTeacher: jwt_decode(localStorage.getItem('token')).userType == "teacher"
        }
    }

    setTitle = () => {
        if (this.props.studentName) {
            this.setState({
                title: this.props.location.state != undefined ? `${this.props.location.state.student.name}'s Lessons` : 'My Lessons - Student isnt logged in aka nonexisting user- showing this for development purposes'
            }
            )
        }
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
                                }
                            }
                        }
                    }
                `}
                
                variables={{studentId: this.props.location.state != undefined ? this.props.location.state.student.id : ""}}
                render={({ props }) => {
                    if (!props) {
                        return (
                            <div>Loading...</div>
                        );
                    }
                    return (
                            <div>
                                <StudentLesson studentWorksheets={props.node} lessons={props.lessons} location={this.props.location}/>
                            </div>
                    );
                }}
            />
            </div>
        )
    }
}


export default withRouter(StudentPage);
