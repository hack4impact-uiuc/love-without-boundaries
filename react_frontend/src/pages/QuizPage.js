import React, { Component } from 'react';
import styled from 'styled-components';
import Question from '../components/question';
import StyledButton from '../components/button';
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
        this.state = {qNum: 0, qMap : []}
    }
    
    finish = () => {window.location = '/admin'}
    addQuestion = () => {
        this.setState({qNum : this.state.qNum + 1, qMap : [...this.state.qMap, this.state.qNum + 1]})
    }
    render() {
        return (
            <div>
                <h1>Quiz Page</h1>
                <br />
                {this.state.qMap.map( () => <div><Question /><br /></div> )}
                <CopiedButton classname="btn" onClick={this.addQuestion}>Add Question</CopiedButton>
                <br/>
                <CopiedButton classname="btn" onClick={this.finish}>Finish Quiz</CopiedButton>
            </div>
        );
    }
}

export default QuizPage;