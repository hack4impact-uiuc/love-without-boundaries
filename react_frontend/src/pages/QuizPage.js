import React, { Component } from 'react';
import styled from 'styled-components';
import Question from '../components/question';
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
        return (
            <QueryRenderer
                    environment={environment}
                    /* How to get specific quiz?? */
                    query={graphql`
                        query QuizPage_Query{
                            lessons{
                                quiz{
                                    questions{
                                        questionName
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
                                <h1>Quiz Page</h1>
                                {
                                    props.lessons.map(lesson => {
                                        if(lesson.quiz.question){
                                            lesson.quiz.question.map(q => <div>{q.questionName}</div>)
                                        }
                                    }) 
                                }
                                <br/>
                                {Object.keys(this.state.qMap).map( qNum => 
                                    <div key={qNum}><Question 
                                        locked={qNum != this.state.editable - 1} 
                                        passBack={this.passBack} 
                                        num={Number(qNum) + 1}/>
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
