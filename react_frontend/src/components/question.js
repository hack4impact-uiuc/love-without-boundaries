import React, {Component} from 'react';
import styled from 'styled-components';
import Answer from './answer';
import addQuestion from '../relay/mutations/addQuestion'
import environment from '../relay/environment';
import PaddedButton from './button';

class Question extends React.Component{
    constructor(props){
        super(props)
        // this.state.answers = [{answerName, isCorrect}]
        this.state = {
            name : this.props.name ? this.props.name : '',
            locked : this.props.locked,
            answers: this.props.answers,
            submitted: this.props.submitted ? this.props.submitted : false // false or true
        };
    }
    componentWillReceiveProps(newProps) {
        if(newProps.locked != this.state.locked){
            this.setState({locked : newProps.locked});
            if(newProps.locked == true)
                addQuestion(environment, this.state.name, this.state.A, this.state.B, this.state.C, this.state.D, this.state.correct);
        }
    }
    
    // update Question name
    updateQuestion = event => {
        this.setState({name : event.target.value});
    }
    
    // "Edit" button pressed => unlock question
    unlock = () => {
        this.props.passBack(this.props.num);
    }

    // answer changes, function is called in Answer Component
    // answerVal is the answer text and idx is the index of the answer
    updateAns = e => {
        this.setState((prevState, props) => ({
            answers: prevState.answers.map((ans,i) => {
                // if it equal to the index
                if (i === e.target.name){
                    return {
                        ...ans,
                        answerName: answerVal
                    };
                }
                return ans;
            })
        }));
    };

    // radio is clicked for a specific answer, index of the answer is passed in
    passCorrect = e => {
        e.preventDefault();
        e.persist();
        const name = e.target.name;
        this.setState((prevState, props) => ({
            answers: prevState.answers.map((ans,i) => {
                // if its the correct index, we change isCorrect to true
                // else we make it false
                if (i == name){
                    return ({...ans, isCorrect: true})
                } 
                return ({...ans, isCorrect: false})
            })
        }));
    }
    // this returns an array of answers, which always is length 4
    createAnswers = answers => {
        let answersElm = [];
        for ( var i = 0; i < 4; i++ ){
            answersElm.push(
                <div key={i} className="form-group">
                    <input type="radio" 
                        name={i} 
                        disabled={this.state.locked} 
                        onChange={this.passCorrect}
                        checked={answers[i] && answers[i].isCorrect}
                        className="form-check-input"
                    />
                    <label className="form-check-label" htmlFor={i}>
                        <input type="text" 
                            name={i} 
                            value={answers[i] && answers[i].answerName !== null ? answers[i].answerName : ''} 
                            onChange={this.updateAns} 
                            readOnly={this.state.locked} 
                            className="form-control"
                        />
                    </label>
                </div>
            );
        }
        return answersElm;
    }
    render() {
        return(
            <div>
                {this.props.num}. 
                <input type="text" value={this.state.name} onChange={this.updateQuestion} readOnly={this.state.locked}/>
                <PaddedButton className="btn btn-info" onClick={this.unlock}>Edit</PaddedButton>
                { this.createAnswers(this.state.answers) }
            </div>
        );
    }

}

export default Question;