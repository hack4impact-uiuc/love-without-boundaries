import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';

class ReviewQuiz extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            lessonID: this.props.lessonID
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({lessonID: newProps.lessonID})
    }
    
    test = () => {}
    
    render() {
        return(
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query reviewQuiz_Query($lesson_id: ID!){
                        node(id: $lesson_id){
                            ... on Lesson{
                                quiz{
                                    questions{
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
                variables={{lesson_id: this.state.lessonID}}
                render={({ props }) => {
                    if (!props || !props.node) {
                        return (
                            <div>Loading...</div>
                        );
                    }
                    console.log(this.props)
                    return (
                        <div>
                            Correct Answers:
                            {props.node.quiz != undefined ? 
                                props.node.quiz.questions.map(q =>
                                    q.answers.map(a => 
                                        <p>
                                            {a.isCorrect ? a.answerName : null}
                                            <br/>
                                        </p>
                                    )
                                )
                                : null
                            }
                        </div>
                    );
                }}
            />
        );
    }

}

export default ReviewQuiz;