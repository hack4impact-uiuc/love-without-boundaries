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
        this.lessonID = 'TGVzc29uOjVhY2E5YTJjMGM2Yzc1N2M0OGQ1ZmY1Yg=='
        this.state = {qNum: 0, qMap : []}
    }
    finish = () => {this.props.history.push('/student');}
    render() {
        return (
            //TODO: replace with some sort of query rendered for lesson-specific quiz?
            <div>
            <QueryRenderer
            environment = {environment}
            query = {graphql`
                query QuizQuery($lesson_id: ID!){
                    node(id: $lesson_id) {
                        ... on Lesson{
                            quiz{
                                name
                                questions{

                                }
                            }
                            `}
            <CopiedButton onClick={() => submitQuiz(environment, 'U3R1ZGVudDo1YWNlZTg4OGVhNWM3NDQ2MjEzZDdkYTY=', "TGVzc29uOjVhY2E5YTJjMGM2Yzc1N2M0OGQ1ZmY1Yg==",['2+2?'],["4"])}>Submit</CopiedButton>
            
            
            </div>
        );
    }
}

export default withRouter(TakeQuizPage);