import React, {Component} from 'react';
import styled from 'styled-components';
import addQuestion from '../relay/mutations/addQuestion'
import environment from '../relay/environment';
import PaddedButton from './button';

class Question extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : this.props.name !== undefined ? this.props.name : '',
            answers: this.props.answers
        };
    }
    componentWillReceiveProps(newProps) {
        if(newProps.locked != this.state.locked){
            this.setState({locked : newProps.locked});
            if(newProps.locked == true)
                addQuestion(environment, this.state.name, this.state.answers);
        }
    }
    
    updateQuestion = event => {
        this.setState({name : event.target.value});
    }
    
    unlock = () => {
        this.props.passBack(this.props.num);
    }

    updateAns = e => {
        e.persist();
        const name = e.target.name;
        const val = e.target.value;
        this.setState((prevState, props) => ({
            answers: prevState.answers.map((ans,i) => {
                if (i == name){
                    return {
                        ...ans,
                        answerName: val
                    };
                }
                return ans;
            })
        }));
    };

    updateCorrect = e => {
        const name = e.target.name;
        this.setState((prevState, props) => ({
            answers: prevState.answers.map((ans,i) => {
                if (i == name){
                    return ({...ans, isCorrect: true})
                } 
                return ({...ans, isCorrect: false})
            })
        }));
    }

    createAnswers = answers => {
        let answersElm = [];
        for ( var i = 0; i < 4; i++ ){
            answersElm.push(
                <div key={i} className="form-group">
                    <input type="checkbox" 
                        name={i} 
                        onChange={this.updateCorrect}
                        checked={ answers[i] !== undefined ? answers[i].isCorrect : false}
                        className="form-check-input"
                        disabled={this.props.locked}
                    />
                    <label className="form-check-label" htmlFor={i}>
                        <input type="text" 
                            name={i} 
                            value={answers != undefined && answers[i] !== undefined ? answers[i].answerName : ''} 
                            onChange={this.updateAns} 
                            className="form-control"
                            readOnly={this.props.locked}
                            onClick={this.unlock}
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
                {this.props.num + 1}. 
                <input type="text" 
                    value={this.state.name} 
                    onChange={this.updateQuestion} 
                    readOnly={this.props.locked}
                    onClick={this.unlock}
                />
                <br/>
                { this.createAnswers(this.state.answers) }
            </div>
        );
    }

}

export default Question;