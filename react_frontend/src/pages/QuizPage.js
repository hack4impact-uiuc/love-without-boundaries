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
        this.state = {qNum: 0, qMap : [], locked : false}
    }
    
    finish = () => {window.location = '/admin'}
    addQuestion = () => {
        this.setState({qNum : this.state.qNum + 1, qMap : [...this.state.qMap, this.state.qNum + 1]})
    }
    lock = () => {
        this.setState({locked : true})
    }
    unlock = () => {
        this.setState({locked : false})
    }
    render() {
        return (
            <div>
                <h1>Quiz Page</h1>
                <br />
                {this.state.qMap.map( () => <div><Question locked={this.state.locked}/><br /></div> )}
                <CopiedButton onClick={this.addQuestion}>Add Question</CopiedButton>
                <br/>
                <CopiedButton onClick={this.unlock}>Edit Questions</CopiedButton>
                <br/>
                <CopiedButton onClick={this.lock}>Submit Questions</CopiedButton>
                <br/>
                <CopiedButton onClick={this.finish}>Finish Quiz</CopiedButton>
            </div>
        );
    }
}

export default QuizPage;