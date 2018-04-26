import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';
import ReviewQuiz from '../components/reviewQuiz';

const SlightlyPaddedButton = styled.button`
    margin: 0px 5px;
`;

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
                                <h1>Past Quiz Submission for this Lesson</h1>
                                <SlightlyPaddedButton
                                    className="btn btn-primary"
                                    onClick={this.props.history.goBack}
                                    bsStyle="primary"
                                > Back
                                </SlightlyPaddedButton>
                                <div className="row">
                                    <div className="col-sm-5">
                                        {
                                            props.node.pastQuizzes ?
                                                props.node.pastQuizzes.map((pq, idx) => (
                                                    pq.lessonID === lessonID ?
                                                        <div key={idx} className="past-quiz-box">

                                                            <h4 style={{ fontWeight: '600' }}>Try #{idx + 1}: {pq.quizName}</h4>
                                                            <p style={{ color: '#3778ba' }}><b>Score: {pq.score}</b></p>
                                                Your Answers:
                                                            {
                                                                pq.submittedAnswers.map((q, i) =>
                                                                    (
                                                                        <div key={i}>
                                                                            {
                                                                                q.answerChosen &&
                                                                        <p key={i}>
                                                                            {i + 1}. {q.answerChosen}<br />
                                                                        </p>
                                                                            }
                                                                        </div>
                                                                    ))
                                                            }

                                                        </div>
                                                        :
                                                        null
                                                ))
                                                :
                                                null
                                        }
                                    </div>
                                    <div className="col-sm-7">
                                        <ReviewQuiz lessonID={lessonID} />
                                    </div>

                                </div>
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
