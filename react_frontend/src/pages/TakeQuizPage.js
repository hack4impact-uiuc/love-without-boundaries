import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';
import submitQuiz from '../relay/mutations/submitQuiz';
import Checkbox from './../components/Checkbox';
import PaddedButton from './../components/button';

class TakeQuizPage extends Component {
    constructor(props) {
        super(props);
        this.state = { lessonID: '', studentID: 'U3R1ZGVudDo1YWUxNWNlM2NkNGI3ODcyNzllYWJmYzM=' };
    }

    componentWillMount = () => {
        this.selectedCheckboxes = {};
    }

    toggleCheckbox = (label, i) => {
        this.selectedCheckboxes[i] = label;
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        submitQuiz(environment, this.state.studentID, this.state.lessonID, Object.keys(this.selectedCheckboxes), Object.values(this.selectedCheckboxes));
    }

    createCheckbox = (label, id, i) => (
        <Checkbox
            key={i}
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
                environment={environment}
                query={graphql`
                    query TakeQuizPage_Query($quiz_id: ID!){
                        node(id:$quiz_id){
                            id
                            __typename
                            
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
                    quiz_id: this.props.location.state.lessonID,
                }}
                render={({ props }) => {
                    if (!props) {
                        return (
                            <div>Loading...</div>
                        );
                    }
                    this.state.lessonID = props.node.id;
                    return (
                        <div>
                            <h1>{props.node.name} Quiz</h1>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">

                                        {
                                            props.node.quiz.questions.map((q, i) =>
                                                (
                                                    <form key={i} onSubmit={(e) => this.handleFormSubmit(e, props.node.quiz.questions[i].id)}>
                                                        {props.node.quiz.questions[i].questionName }
                                                        {this.createCheckboxes(props.node.quiz.questions[i].answers.map((q, i) => q.answerName), props.node.quiz.questions[i].id) }
                                                        {i === props.node.quiz.questions.length - 1 && <PaddedButton className="btn btn-danger" type="submit">Save</PaddedButton>}
                                                    </form>
                                                ))
                                        }
                                    </div>
                                    <PaddedButton className="btn btn-danger" onClick={this.props.history.goBack}>Go Back</PaddedButton>
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
