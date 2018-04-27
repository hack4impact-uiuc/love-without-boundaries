import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { withRouter } from 'react-router-dom';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';
import ReviewQuiz from '../components/reviewQuiz';
import ErrorMessage from '../components/errorMessage';

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
                    if (props.node == null) {
                        return <ErrorMessage message="You have no Previous Quizzes for this lesson." />;
                    }
                    const lessonID = this.props.location.state !== undefined ? this.props.location.state.lessonID : undefined;
                    if (lessonID === undefined) {
                        return <ErrorMessage message="No Lesson, please click on Lesson." />;
                    }
                    if (props.node.pastQuizzes === undefined) {
                        return <ErrorMessage message="You have no Previous Quizzes. You cannot access Review Quiz in the admin edit lessons portal."/>
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
