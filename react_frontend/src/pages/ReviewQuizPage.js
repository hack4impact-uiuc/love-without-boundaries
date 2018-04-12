import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';

class ReviewQuizPage extends Component{
    constructor(props){
        super(props)
        this.state = {qNum: 0, qMap : []}
    }
    finish = () => {this.props.history.push('/student');}
    render() {
        return (
            <QueryRenderer
                    environment={environment}
                    /* IDK HOW TO ONLY GET A SPECIFIC STUDENT */
                    query={graphql`
                        query ReviewQuizPage_Query{
                            students{
                                pastQuizzes{
                                    quizName
                                    score
                                    submittedAnswers{
                                        answerChosen
                                        questionID
                                    }
                                }
                            }
                        }   
                    `}
                    variables={{}}
                    render={({ props }) => {
                        if (!props) {
                            return (
                                <div>Loading...</div>
                            );
                        }
                        return (
                            <div>
                                <h1>Quiz 1</h1>
                                {
                                    props.students.map(student => {
                                        if(student.pastQuizzes){
                                            student.pastQuizzes.map(pastQuiz => {
                                                <div>
                                                    <b>{pastQuiz.quizName} - Score: {pastQuiz.score}</b>
                                                    <br/>
                                                    {pastQuiz.questions.map(q => 
                                                        <div>
                                                            Your Answer: {q.answerChosen}<br/>
                                                            Correct Answer: {q.correctAnswer}<br/><br/>
                                                        </div>
                                                    )}
                                                </div>
                                            })
                                        }
                                    }) 
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