/* 
 * This page is shown when an Admin edits a Quiz for a lesson
 * It accepts a prop through react router with the lessonID
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Question from '../components/question';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';
import PaddedButton from '../components/button';

class QuizPage extends Component{

    constructor(props){
        super(props)
        this.state = {qNum : 0, qMap : [], editable : 0}
    }
    
    finish = () => {this.props.history.push('/admin')}
    addQuestion = () => {
        this.setState({
            qNum : this.state.qNum + 1,
            qMap : [...this.state.qMap, this.state.qNum + 1],
            editable : this.state.qNum + 1
        })
    }
    lock = () => {
        this.setState({editable : "meme"})
    }
    passBack = passUp => {
        this.setState({editable : passUp, passed : true})
    }
    render() {
        if (!this.props.location || !this.props.location.state || !this.props.location.state.lessonID){
            return <h2>Lesson doesn't exist. Try again.</h2>
        }
        
        console.log(this.props.location.state);
        return (
            <QueryRenderer
                    environment={environment}
                    query={graphql`
                        query QuizPage_Query($lesson_id: ID!){
                            node(id: $lesson_id) {
                                id
                                ... on Lesson {
                                    name
                                    quiz {
                                        questions {
                                            id
                                            questionName
                                            answers{
                                                answerName
                                                isCorrect
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    `}
                    variables={{
                        lesson_id: this.props.location.state.lessonID
                    }}
                    render={({ props }) => {
                        if (!props || !props.node) {
                            return (
                                <div>Loading...</div>
                            );
                        }
                        return (
                            <div>
                                <h1>Quiz Page</h1>
                                {
                                    props.node.quiz.questions.map((q,i) => 
                                        <Question
                                            locked={ false }
                                            passBack={this.passBack}
                                            num={i}
                                        />
                                    )
                                }
                                <br/>
                                {Object.keys(this.state.qMap).map( qNum => 
                                    <div key={qNum}>
                                        <Question 
                                            locked={qNum != this.state.editable - 1} 
                                            passBack={this.passBack} 
                                            num={Number(qNum) + 1}
                                        />
                                    <br/></div>
                                )}
                                <PaddedButton className="btn btn-info"onClick={this.addQuestion}>Add Question</PaddedButton>
                                <br/>
                                <PaddedButton className="btn btn-success" onClick={this.lock}>Submit Questions</PaddedButton>
                                <br/>
                                <PaddedButton className="btn btn-success" onClick={this.finish}>Finish Quiz</PaddedButton>
                            </div>
                        );
                    }}
            />
        );
    }
}

export default QuizPage;
