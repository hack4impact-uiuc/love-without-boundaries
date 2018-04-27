import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';
import ReviewQuiz from '../components/reviewQuiz';

class ReviewQuizPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentID: 'U3R1ZGVudDo1YWUxNWNlM2NkNGI3ODcyNzllYWJmYzM=',
        };
    }

    finish = () => { this.props.history.push('/student'); }
    render() {
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
                variables={{ student_id: this.state.studentID }}
                render={({ props }) => {
                    if (!props) {
                        return (
                            <div>Loading...</div>
                        );
                    }
                    if (props.node == null) {
                        return <p>You have no Previous Quizzes for this lesson.</p>;
                    }
                    const lessonID = this.props.location.state !== undefined ? this.props.location.state.lessonID : undefined;
                    if (lessonID === undefined) {
                        return <p>Review Lesson not available for this lesson</p>;
                    }
                    if (props.node.pastQuizzes === undefined) {
                        return <p>You have no Previous Quizzes. You cannot access Review Quiz in the admin edit lessons portal.</p>;
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
