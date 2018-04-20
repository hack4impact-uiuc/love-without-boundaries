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
            isTeacher: jwt_decode(localStorage.getItem('token')).userType == 'teacher',
        };
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

                    variables={{ studentId: this.props.location.state != undefined ? this.props.location.state.student.id : '' }}
                    render={({ props }) => {
                        if (!props) {
                            return (
                                <div>Loading...</div>
                            );
                        }
                        return (

                            <div className="container-fluid">
                                <h2>
                                    {
                                        this.props.location.state != undefined ? `${this.props.location.state.student.name}'s Lessons` : 'My Lessons - Student isnt logged in aka nonexisting user- showing this for development purposes'
                                    }
                                </h2>
                                <GoogleDocButton url="https://docs.google.com/document/d/1EGbrZFxY33xyEZdLyXmKGdWi5NR4CL7nS4C_7HzhSgE/edit" />
                                {
                                    props.lessons.map((lesson, idx) => (
                                        <LessonComponent
                                            key={idx}
                                            id={lesson.id}
                                            lessonName={lesson.name}
                                            lessonNotes={lesson.notesName}
                                            lessonNotesLink={lesson.notesURL}
                                            lessonWorksheetLink={lesson.worksheetURL}
                                            worksheetName={lesson.worksheetName}
                                            quizName={lesson.quiz}
                                            quizPercentage="50%"
                                            quizIsChecked={false}
                                            isTeacher={this.state.isTeacher}
                                        />
                                    ))
                                }
                            </div>
                        );
                    }}
                />
            </div>
        );
    }
}


export default withRouter(StudentPage);
