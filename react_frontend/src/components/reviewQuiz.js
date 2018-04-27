import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';

const SlightlyPaddedButton = styled.button`
    margin: 0px 5px;
`;

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
                    <p key={idx} style={{ color: '#22a531', paddingLeft: '20px' }}>
                        Correct Answer: {answers[i].answerName}
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
                                name
                                quiz{
                                    questions{
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
                variables={{ lesson_id: this.state.lessonID }}
                render={({ props }) => {
                    if (!props || !props.node) {
                        return (
                            <div>Loading...</div>
                        );
                    }
                    if (this.props.pastQuizzes === null) {
                        return <p>No Past Quizzes.</p>;
                    }
                    return (
                        <div>
                            <h1>Past Quiz Submissions for Lesson: <span style={{ color: '#2771aa' }}>{props.node.name}</span></h1>
                            <SlightlyPaddedButton
                                className="btn btn-primary"
                                onClick={this.props.history.goBack}
                                bsStyle="primary"
                            > Back
                            </SlightlyPaddedButton>
                            <div className="row">
                                <div className="col-sm-5">
                                    {
                                        this.props.pastQuizzes ?
                                            this.props.pastQuizzes.map((pq, idx) => (
                                                pq.lessonID === this.props.lessonID ?
                                                    <div key={idx} className="past-quiz-box">
                                                        <h4 style={{ fontWeight: '600' }}>Try #{idx + 1}</h4>
                                                        {console.log(pq.score)}
                                                        <p style={{ color: '#3778ba' }}><b>Score: {pq.score.toFixed(2) * 100}%</b></p>
                                                        <b style={{ paddingBottom: '5px' }}>Your Answers:</b>
                                                        {
                                                            pq.submittedAnswers.map((q, i) =>
                                                                (
                                                                    props.node.quiz.questions.some(e => e.id === q.questionID) ?
                                                                        <div key={i}>
                                                                            {
                                                                                q.answerChosen &&
                                                                            <p key={i}>
                                                                                {i + 1}. {q.answerChosen}<br />
                                                                            </p>
                                                                            }
                                                                        </div>
                                                                        :
                                                                        <p key={i}>
                                                                            {i + 1 }. Answered Deleted Question
                                                                        </p>
                                                                ))
                                                        }

                                                    </div>
                                                    :
                                                    null
                                            ))
                                            :
                                            null
                                    }
                                </div>
                                <div className="col-sm-7">
                                    <div className="row correct-answer-box">
                                        <h2>Correct Answers:</h2>
                                        {
                                            props.node.quiz != undefined ?
                                                props.node.quiz.questions.map((q, idx) => (
                                                    <div key={idx} style={{ paddingBottom: '20px' }}>
                                                        <p>{q.questionName}</p>
                                                        { this.displayAnswer(q.answers, idx) }
                                                    </div>))
                                                : null
                                        }
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

export default withRouter(ReviewQuiz);
