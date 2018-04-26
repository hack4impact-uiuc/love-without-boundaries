import React from 'react';
import addQuestion from '../relay/mutations/addQuestion';
import deleteQuestion from '../relay/mutations/deleteQuestion';
import environment from '../relay/environment';
import PaddedButton from '../components/button';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name !== undefined ? this.props.name : '',
            answers: this.props.answers,
        };
    }
    componentWillReceiveProps(newProps) {
        if (newProps.locked !== this.props.locked) {
            if (this.props.editPastQuestion == true && newProps.locked == true) {
                deleteQuestion(environment, this.props.quizID, this.props.id);
                addQuestion(environment, this.props.quizID, this.state.name, this.state.answers);
            } else if (newProps.locked == true) {
                addQuestion(environment, this.props.quizID, this.state.name, this.state.answers);
                window.location.reload();
            }
        }
    }
    updateQuestion = event => {
        this.setState({ name: event.target.value });
    }

    unlock = () => {
        this.props.passBack(this.props.num);
    }
    remove = () => {
        deleteQuestion(environment, this.props.quizID, this.props.id);
        window.location.reload();
    }

    updateAns = e => {
        e.persist();
        this.setState((prevState) => ({
            answers: prevState.answers.map((ans, i) => {
                if (i == e.target.name) {
                    return {
                        ...ans,
                        answerName: e.target.value,
                    };
                }
                return ans;
            }),
        }));
    };

    updateCorrect = e => {
        e.persist();
        this.setState((prevState) => ({
            answers: prevState.answers.map((ans, i) => {
                if (i == e.target.name) {
                    return ({ ...ans, isCorrect: true });
                }
                return ({ ...ans, isCorrect: false });
            }),
        }));
    }

    createAnswers = answers => {
        const answersElm = [];
        for (let i = 0; i < 4; i += 1) {
            answersElm.push(<div key={i} className="form-group ">
                <input
                    type="checkbox"
                    name={i}
                    onChange={this.updateCorrect}
                    checked={answers[i] !== undefined ? answers[i].isCorrect : false}
                    className="form-check-input"
                    disabled={this.props.locked}
                />
                <label className="form-check-label" htmlFor={i}>
                    <input
                        type="text"
                        name={i}
                        value={answers != undefined && answers[i] !== undefined ? answers[i].answerName : ''}
                        onChange={this.updateAns}
                        className="form-control ppp"
                        readOnly={this.props.locked}
                        onClick={this.props.locked == true ? this.unlock : null}
                    />
                </label>
            </div>);
        }
        return answersElm;
    }
    render() {
        return (
            <div className="hello">
                {this.props.num + 1}.
                <input
                    className="ppp2"
                    type="text"
                    value={this.state.name}
                    onChange={this.updateQuestion}
                    readOnly={this.props.locked}
                    onClick={this.props.locked == true ? this.unlock : null}
                />
                <PaddedButton className="btn btn-link" onClick={this.remove}>
                    <span className="glyphicon glyphicon-trash" aria-hidden="true" />
                </PaddedButton>
                <br />
                { this.createAnswers(this.state.answers) }
            </div>
        );
    }
}
export default Question;
