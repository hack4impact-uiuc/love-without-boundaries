import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom'
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';
import ReviewQuiz from '../components/reviewQuiz';

class ReviewQuizPage extends Component{
    constructor(props){
        super(props)
        console.log(this.props.location);
        this.state = {
            studentID: "U3R1ZGVudDo1YWQwNmZmYzk2NDg0ZGFhMTc3MWJmYTc=",
        }
    }
    
    finish = () => {this.props.history.push('/student');}
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
                    variables={{student_id: this.state.studentID }}
                    render={({ props }) => {
                        if (!props) {
                            return (
                                <div>Loading...</div>
                            );
                        }
                        const lessonID = this.props.location.state !== undefined ? this.props.location.state.lessonID : undefined
                        
                        if (lessonID === undefined){
                            return <div>Incorrect Lesson</div>
                        }
                        if(lessonID){
                            return (
                                <div>
                                    <h1>Quiz Submissions</h1>
                                    {/* {
                                        <ReviewQuiz lessonID={lessonID}/>
                                    } */}
                                    {
                                        props.node.pastQuizzes.map((pastQuiz, idx) => 
                                            <div key={idx}>
                                                {
                                                    pastQuiz.lessonID === lessonID ? 
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