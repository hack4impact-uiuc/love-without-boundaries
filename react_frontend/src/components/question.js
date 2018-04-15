import React, {Component} from 'react';
import styled from 'styled-components';
import Answer from './answer';
import addQuestion from '../relay/mutations/addQuestion'
import environment from '../relay/environment';

const CopiedButton = styled.button`
    background-color: #4CAF50;
    border: 1px solid #ddd;
    padding: 10px;
    color: white;
    font-size: 15px;
    margin: 5px;
`;

class Question extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : this.props.name,
            locked : this.props.locked,
            answers: this.props.answers ? this.props.answers : [{},{},{},{}],
            correct: this.props.correct, // correct index i.e. 1,2,3,4
            submitted: this.props.submitted ? this.props.submitted : false // false or true
        }
        
    }
    componentWillReceiveProps(newProps) {
        if(newProps.locked != this.state.locked){
            this.setState({locked : newProps.locked})
            if(newProps.locked == true)
                addQuestion(environment, this.state.name, this.state.A, this.state.B, this.state.C, this.state.D, this.state.correct)
        }
    }
    updateQuestion = event => {
        this.setState({name : event.target.value})
    }
    unlock = () => {
        this.props.passBack(this.props.num);
    }

    passAns = (answerVal, idx) => {
        this.setState((prevState, props) => ({
            answers: prevState.answers.map((ans,i) => {
                if (i === idx ){
                    return {
                        ...ans,
                        answerName: answerVal
                    };
                }
                
            })
        }));
    };

    passCorrect = idx => {
        this.setState((prevState, props) => ({
            answers: prevState.answers.map((ans,i) => (
                i === idx ? 
                {...ans,isCorrect: true} 
                : {...ans, isCorrect: false}
            ))
        }));
    }
    createAnswers = answers => {
        console.log(this.state.locked)
        let answersElm = [];
        for ( var i = 0; i < 4; i++ ){
            answersElm.push(
                <Answer 
                    index={i}
                    key={i}
                    opt = { answers[i] ? answers[i].answerName : '' }
                    locked={this.state.locked} 
                    passAns={this.passAns}
                    passCorrect={this.passCorrect}
                    radio={ this.state.answers[i] ? this.state.answers[i].isCorrect : false}
                />);
        }
        return answersElm;
    }
    render() {
        return(
            <div>
                {this.props.num}. 
                <input type="text" value={this.state.name} onChange={this.updateQuestion} readOnly={this.state.locked}/>
                <CopiedButton onClick={this.unlock}>Edit</CopiedButton>
                { this.createAnswers(this.state.answers) }
            </div>
        );
    }

}

export default Question;