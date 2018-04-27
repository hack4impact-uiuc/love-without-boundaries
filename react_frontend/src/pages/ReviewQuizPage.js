import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { withRouter } from 'react-router-dom';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';
import ReviewQuiz from '../components/reviewQuiz';

class ReviewQuizPage extends Component {
    constructor(props) {
        super(props);
        const token = jwtDecode(sessionStorage.getItem('token'));
        this.state = {
            studentID: token !== null ? token.id : '',
        };
    }

    render() {
        if (this.state.studentID === null) {
            return <h4 className="page-error">You must be logged in to view previous quizzes</h4>;
        }
        console.log(this.state.studentID);
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query ReviewQuizPage_Query($student_id: ID!){
                        node(id: $student_id){
                            ... on Student{
                                pastQuizzes{
                                    lessonID
                                    quizName
                                    score
                                    submittedAnswers{
                                        questionID
                                        answerChosen
                                    }
                                }
                            }
                        }
                    } 
                    `}
                variables={{ student_id: this.state.studentID !== null ? this.state.studentID : '' }}
                render={({ props }) => {
                    if (!props) {
                        return (
                            <div>Loading...</div>
                        );
                    }
                    console.log(props);
                    if (props.node == null) {
                        return <h4 className="page-error">You have no Previous Quizzes for this lesson.</h4>;
                    }
                    const lessonID = this.props.location.state !== undefined ? this.props.location.state.lessonID : undefined;
                    if (lessonID === undefined) {
                        return <h4 className="page-error">Review Lesson not available for this lesson, please press the back button one more time to go back to lesson page</h4>;
                    }
                    if (props.node.pastQuizzes === undefined) {
                        return <h4 className="page-error">You have no Previous Quizzes. You cannot access Review Quiz in the admin edit lessons portal.</h4>;
                    }
                    if (lessonID) {
                        return (
                            <div className="container">
                                <ReviewQuiz lessonID={lessonID} pastQuizzes={props.node.pastQuizzes} />
                            </div>
                        );
                    }
                    return (<div>Something went wrong :(</div>);
                }}
            />
        );
    }
}

export default withRouter(ReviewQuizPage);
