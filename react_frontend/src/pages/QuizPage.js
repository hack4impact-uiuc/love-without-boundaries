import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { Link } from 'react-router-dom';
import environment from '../relay/environment';
import AdminQuiz from '../components/adminQuiz';
import PaddedButton from '../components/button';

class QuizPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    finish = () => { this.props.history.push('/admin'); }

    render() {
        if (!this.props.location || !this.props.location.state || !this.props.location.state.lessonID) {
            return <h2>Lesson doesnt exist. Try again.</h2>;
        }
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                        query QuizPage_Query($lesson_id: ID!){
                            node(id: $lesson_id) {
                                id
                                ... on Lesson {
                                    name
                                    quiz {
                                        lessonID
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
                    lesson_id: this.props.location.state.lessonID,
                }}
                render={({ props }) => {
                    if (!props || !props.node) {
                        return (
                            <div>Loading...</div>
                        );
                    }
                    return (
                        <div>
                            <h1>Quiz Page</h1>
                            <AdminQuiz questions={props.node.quiz.questions} quizID={props.node.id} />
                            <br />
                            <Link to="/admin/lesson"><PaddedButton className="btn btn-success">Finish Quiz</PaddedButton></Link>
                        </div>
                    );
                }}
            />
        );
    }
}

export default QuizPage;
