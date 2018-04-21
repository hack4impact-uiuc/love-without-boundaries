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
                        return (
                            <div>
                                <h1>Quiz Submission</h1>
                                {
                                    props.students.map(student => {
                                        if(student.pastQuizzes){
                                            student.pastQuizzes.map(pastQuiz => {if(pastQuiz.questions){
                                                <div>
                                                    <b>{pastQuiz.quizName} - Score: {pastQuiz.score}</b>
                                                    <br/>
                                                    pastQuiz.questions.map(q => 
                                                        <div>
                                                            Your Answer: {q.answerChosen}<br/>
                                                            Correct Answer: {q.correctAnswer}<br/><br/>
                                                        </div>
                                                    )}
                                                </div>
                                    }})}})
                                        
                                }
                                <button onClick={this.finish}>Finish</button>
                            </div>
                        );
                    }}
            />
        );
    }
}

export default withRouter(ReviewQuizPage);