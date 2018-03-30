import React, { Component } from 'react';
import styled from 'styled-components';
import Question from '../components/question';
import StyledButton from '../components/button';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';
const CopiedButton = styled.button`
    background-color: #4CAF50;
    border: 1px solid #ddd;
    padding: 10px;
    color: white;
    font-size: 15px;
    margin: 5px;
`;
class QuizPage extends Component{
    
    constructor(props){
        super(props)
        this.state = {qNum : 0, qMap : [], editable : 0, passed : false}
    }
    
    finish = () => {window.location = '/admin'}
    addQuestion = () => {
        this.setState({
            qNum : this.state.qNum + 1,
            qMap : [...this.state.qMap, this.state.qNum + 1],
            editable : this.state.qNum + 1,
            passed : false
        })
    }
    lock = () => {
        this.setState({editable : "meme"})
    }
    passBack = passUp => {
        this.setState({editable : passUp, passed : true})
    }
    render() {
        return (
            <QueryRenderer
                    environment={environment}
                    // query={graphql`
                    //     query QuizPage_Query{
                    //         quiz {
                    //             id
                    //             name
                    //             questions {
                    //                 questionName
                    //             }
                    //         }
                    //     }   
                    // `}
                    variables={{}}
                    render={({ props }) => {
                        if (!props) {
                            return (
                                <div>Loading...</div>
                            );
                        }
                        return (
                            <div>
                                <h1>Quiz Page</h1>
                                {/* {props.quiz.map(quiz => //map through quizzes
                                    quiz.questions.map(q => //map through questions in quizzes
                                    <div>{q.questionName}</div>
                                ))} */}
                                <br/>
                                {Object.keys(this.state.qMap).map( qNum => 
                                    // qNum is index, editable is index if propped, number if unpropped
                                    <div><Question 
                                        locked={this.state.passed
                                                ? qNum != this.state.editable
                                                : qNum != this.state.editable - 1} 
                                        passBack={this.passBack} 
                                        num={qNum}/>
                                    <br/></div>
                                )}
                                <CopiedButton onClick={this.addQuestion}>Add Question</CopiedButton>
                                <br/>
                                <CopiedButton onClick={this.lock}>Submit Questions</CopiedButton>
                                <br/>
                                <CopiedButton onClick={this.finish}>Finish Quiz</CopiedButton>
                            </div>
                        );
                    }}
            />
        );
    }
}

export default QuizPage;