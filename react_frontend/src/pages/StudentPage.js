import React from 'react';
import LessonComponent from './../components/lesson';
import { graphql, QueryRenderer } from 'react-relay';
import { BrowserRouter as Router, Route, Link, withRouter} from "react-router-dom";
import environment from '../relay/environment';
import GoogleDocButton from '../components/googleDocButton'
import jwt_decode from 'jwt-decode';

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
                title: this.props.location.state.student.name + "'s Lessons"
            }
            )
        }
    }
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query StudentPage_Query{
                        lessons{
                            id
                            name
                            worksheetName
                            worksheetURL
                            notesName
                            notesURL
                        }
                    }
                    query StudentPage_Worksheets{
                        node(id: $studentId) {
                            ... on Student {
                                worksheets {
                                    lessonID
                                }
                            }
                        }
                    }
                `}
                
                variables={{studentId: this.props.location.state.student.id}}
                render={({ props }) => {
                    if (!props) {
                        return (
                            <div>Loading...</div>
                        );
                    }
                    return (
                            <StudentLessonComponent studentWorksheets={props.node} lessons={props.lessons} location={this.props.location}/>
                    );
                }}
            />
        )
    }
}


export default withRouter(StudentPage);
