import React from 'react';
import styled from 'styled-components';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';

class ReviewQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessonID: this.props.lessonID,
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({ lessonID: newProps.lessonID });
    }

    displayAnswer = (answers, idx) => {
        let ret = null;
        for (let i = 0; i < answers.length; i += 1) {
            if (answers[i].isCorrect) {
                ret = (
                    <p key={idx} style={{ color: '#22a531' }}>
                        {idx + 1}. {answers[i].answerName}
                    </p>
                );
            }
        }
        if (ret === null) {
            ret = (
                <p key={idx} style={{ color: '#22a531' }}>{idx + 1}. There isnt a correct answer for this question. </p>
            );
        }
        return ret;
    }

    render() {
        return (
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
                variables={{ lesson_id: this.state.lessonID }}
                render={({ props }) => {
                    if (!props || !props.node) {
                        return (
                            <div>Loading...</div>
                        );
                    }
                    return (
                        <div>
                            <h2>Correct Answers:</h2>
                            {
                                props.node.quiz != undefined ?
                                    props.node.quiz.questions.map((q, idx) =>
                                        this.displayAnswer(q.answers, idx))
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
