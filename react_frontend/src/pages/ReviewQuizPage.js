import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom'
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';
import ReviewQuiz from '../components/reviewQuiz';

class ReviewQuizPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            studentID: "U3R1ZGVudDo1YWQwMWM5YWZkODFiNjg3YWYwYmM1NWQ=",
            lessonID: (this.props.location.state != undefined ? this.props.location.state.lessonID : null)
        }
    }
    
    finish = () => {this.props.history.push('/student');}
    render() {
        return (
            <QueryRenderer
                    environment={environment}
                    query={graphql`
                        query ReviewQuizPage_Query($student_id: ID!){
                            node(id: $student_id) {
                                ... on Student {
                                    pastQuizzes {
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
                    variables={{student_id: this.state.studentID, lesson_id: this.state.lessonID}}
                    render={({ props }) => {
                        if (!props) {
                            return (
                                <div>Loading...</div>
                            );
                        }
                        if(this.state.lessonID){
                            return (
                                <div>
                                    <h1>Quiz Submissions</h1>
                                    {
                                        <ReviewQuiz lessonID={this.state.lessonID}/>
                                    }
                                    {
                                        props.node.pastQuizzes.map((pastQuiz, idx) => 
                                            <div key={idx}>
                                                {
                                                    pastQuiz.lessonID === this.state.lessonID ? 
                                                    <div>
                                                        <b>{pastQuiz.quizName} - Score: {pastQuiz.score}</b>
                                                        <br/>
                                                        Your Answers:
                                                        {pastQuiz.submittedAnswers.map((q, idx) => 
                                                            <p key={idx}>
                                                                {q.answerChosen}<br/>
                                                            </p>
                                                        )}
                                                    </div>
                                                    : null
                                                }
                                            </div>
                                        )
                                    }
                                    <button onClick={this.finish}>Finish</button>
                                </div>
                            );
                        }
                        else{
                            return(<div>Something went wrong :(</div>)
                        }
                    }}
            />
        );
    }
}

export default withRouter(ReviewQuizPage);