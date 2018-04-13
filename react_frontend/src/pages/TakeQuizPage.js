import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
// import Quiz from '../components/quiz';
import environment from '../relay/environment';
import submitQuiz from '../relay/mutations/submitQuiz';
import { graphql, QueryRenderer } from 'react-relay';

import Checkbox from './../components/Checkbox';

const items = [
    'One',
    'Two',
    'Three',
  ];

const CopiedButton = styled.button`
    background-color: #4CAF50;
    border: 1px solid #ddd;
    padding: 10px;
    color: white;
    font-size: 15px;
    margin: 5px;
`;

class TakeQuizPage extends Component {
    constructor(props) {
        super(props);
        this.lessonID = 'TGVzc29uOjVhY2E5YTJjMGM2Yzc1N2M0OGQ1ZmY1Yg==';
        this.state = { qNum: 0, qMap: [] };

        
    }

    componentWillMount = () => {
        this.selectedCheckboxes = {};
      }
    
      toggleCheckbox = (label, i) => {
        this.selectedCheckboxes[i] = label
        console.log(this.selectedCheckboxes)
      }
    
      handleFormSubmit = (formSubmitEvent, id) => {
        formSubmitEvent.preventDefault();
        submitQuiz(environment, "U3R1ZGVudDo1YWQwMWM5YWZkODFiNjg3YWYwYmM1NWQ=", "TGVzc29uOjVhZDAyODA2MTBmNzBiMDA1ZmZmZTg4Mg==", Object.keys(this.selectedCheckboxes), Object.values(this.selectedCheckboxes))
        
      }
    
      createCheckbox = (label, id, i) => (
        <Checkbox
                key = {id}
                label={label}
                handleCheckboxChange={(e) => this.toggleCheckbox(e, id)}
            />
      )
    
      createCheckboxes = (answerNames, questionId) => (
        answerNames.map((e) => this.createCheckbox(e, questionId))
      )
    

    render() {
        return (
            <QueryRenderer
                environment ={environment}
                query={graphql`
                    query TakeQuizPage_Query($quiz_id: ID!){
                        node(id:$quiz_id){
                            id
                            __typename
                            
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
                    quiz_id: this.props.location.state.lessonID
                }}
                render={({ props }) => {
                    if (!props) {
                        return (
                            <div>Loading...</div>
                        );
                    }
                    return (
                        <div>
                            <h1>Quiz 1</h1>
                            <div className="container">
                                <div className="row">
                                <div className="col-sm-12">

                                    {props.node.quiz.questions.map((q, i) =>
                                        <form onSubmit={(e) => this.handleFormSubmit(e, props.node.quiz.questions[i].id)}>
                                            {props.node.quiz.questions[i].questionName }
                                            {this.createCheckboxes(props.node.quiz.questions[i].answers.map((q,i) => q.answerName), props.node.quiz.questions[i].id ) }
                                            {i === props.node.quiz.questions.length - 1 && <button className="btn btn-default" type="submit">Save</button>}
                                        </form>
                                    )}
                                   
                                </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            />
        );
    }
}


export default withRouter(TakeQuizPage);
