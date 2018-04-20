import React from 'react';
import Question from '../components/question';
import PaddedButton from '../components/button';

class AdminQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: this.props.questions || {},
            qNum: this.props.questions !== undefined ? this.props.questions.length : 0,
            editable: 'omgwow',
            overriden: false,
        };
    }

    lock = () => {
        this.setState({ editable: 'omgwow' });
    }

    passBack = passUp => {
        this.setState({ editable: passUp, overriden: true });
    }

    addQuestion = () => {
        this.setState((prevState) => ({
            qNum: prevState.qNum + 1,
            questions: [...prevState.questions,
                {
                    questionName: '',
                    answers: [
                        { answerName: '', isCorrect: false },
                        { answerName: '', isCorrect: false },
                        { answerName: '', isCorrect: false },
                        { answerName: '', isCorrect: false },
                    ],
                },
            ],
            editable: this.state.qNum,
            overriden: false,
        }));
    }

    render() {
        return (
            <div>
                {
                    this.state.questions.map((q, i) => (
                        <Question
                            num={i}
                            key={i}
                            name={q.questionName}
                            answers={q.answers}
                            passBack={this.passBack}
                            locked={this.state.editable != i}
                            overriden={this.state.overriden}
                            id={q.id}
                            location={this.props.location}
                        />
                    ))
                }
                <br />
                <PaddedButton className="btn btn-info" onClick={this.addQuestion}>Add Question</PaddedButton>
                <br />
                <PaddedButton className="btn btn-success" onClick={this.lock}>Submit Questions</PaddedButton>
            </div>
        );
    }
}
export default AdminQuiz;
