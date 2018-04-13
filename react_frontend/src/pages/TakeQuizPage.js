import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'
import Quiz from '../components/quiz';
import environment from '../relay/environment';
import submitQuiz from '../relay/mutations/submitQuiz';
const CopiedButton = styled.button`
    background-color: #4CAF50;
    border: 1px solid #ddd;
    padding: 10px;
    color: white;
    font-size: 15px;
    margin: 5px;
`;

class TakeQuizPage extends Component{
    constructor(props){
        super(props)
        this.state = {qNum: 0, qMap : []}
    }
    finish = () => {this.props.history.push('/student');}
    render() {
        return (
            //TODO: replace with some sort of query rendered for lesson-specific quiz?
            <div>
            <h1>Quiz 1</h1>
            <Quiz/>
            <CopiedButton onClick={() => submitQuiz(environment, 'U3R1ZGVudDo1YWNlZTg4OGVhNWM3NDQ2MjEzZDdkYTY=', 'TGVzc29uOjVhY2E2OWQ0OWE2NDY5NjY4MTIzZDkyOA==',['Who is Tim?'],['Yes.'])}onClick={this.finish}>Submit</CopiedButton>
            
            
            </div>
        );
    }
}

export default withRouter(TakeQuizPage);