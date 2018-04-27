import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../relay/environment';
import submitQuiz from '../relay/mutations/submitQuiz';
import Checkbox from './../components/checkbox';
import jwtDecode from 'jwt-decode';
import PaddedButton from './../components/button';
import ErrorMessage from '../components/errorMessage';

class TakeQuizPage extends Component {
    constructor(props) {
        super(props);
        this.state = { lessonID: '', studentID: jwtDecode(sessionStorage.getItem('token')) !== null ? jwtDecode(sessionStorage.getItem('token')).id : null };
    }

    componentWillMount = () => {
        this.selectedCheckboxes = {};
    }

      toggleCheckbox = (label, i) => {
          if (this.selectedCheckboxes[i] != label) {
              this.selectedCheckboxes[i] = label;
          }
      }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        submitQuiz(environment, this.state.studentID, this.state.lessonID, Object.keys(this.selectedCheckboxes), Object.values(this.selectedCheckboxes));
        this.props.history.goBack();
    }


    createCheckbox = (label, id, i) => (
        <Checkbox
            key={i}
            label={label}
            handleCheckboxChange={(e) => this.toggleCheckbox(e, id)}
        />
    )

    createCheckboxes = (answerNames, questionId) => (
        answerNames.map((e, i) => this.createCheckbox(e, questionId, i))
    )

    render() {
        if (this.state.studentID === null) {
            return <ErrorMessage code="404" message="You must be logged in as a Student to take quiz. Try logging in again."/>
        }
        if (this.props.location.state === undefined ){
            return <ErrorMessage code="404" message="No Lesson"/>
        }
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
                    quiz_id: this.props.location.state !== undefined ? this.props.location.state.lessonID : '',
                }}
                render={({ props }) => {
                    if (!props) {
                        return (
                            <p>Loading...</p>
                        );
                    }
                    this.state.lessonID = props.node.id;
                    return (
                        <div className="container">
                            <h1>{props.node.name} Quiz</h1>
                            <div className="row">
                                <div className="col-sm-12">

                                    {
                                        props.node.quiz.questions.map((q, i) =>
                                            (
                                                <form key={i} onSubmit={(e) => this.handleFormSubmit(e, props.node.quiz.questions[i].id)}>
                                                    {props.node.quiz.questions[i].questionName }
                                                    {
                                                        this.createCheckboxes(
                                                            props.node.quiz.questions[i].answers.map((q, idx) => q.answerName),
                                                            props.node.quiz.questions[i].id,
                                                        )
                                                    }
                                                    {
                                                        i === props.node.quiz.questions.length - 1 &&
                                                            <PaddedButton
                                                                className="btn btn-primary"
                                                                onClick={() => alert('Good Job!')}
                                                                type="submit"
                                                            >Submit Quiz
                                                            </PaddedButton>
                                                    }
                                                </form>
                                            ))
                                    }
                                </div>
                                <PaddedButton className="btn btn-danger" onClick={this.props.history.goBack}>Go Back</PaddedButton>
                            </div>
                        </div>
                    );
                }}
            />
        );
    }
}


export default withRouter(TakeQuizPage);
