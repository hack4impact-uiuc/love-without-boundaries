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
            name : "",
            locked : this.props.locked,
            A: "",
            B: "",
            C: "",
            D: "",
            correct: ""
        }
    }
    componentWillReceiveProps(newProps) {
        this.setState({locked : newProps.locked})
        addQuestion(environment, this.state.name, this.state.A, this.state.B, this.state.C, this.state.D, this.state.correct)
    }
    updateQuestion = event => {
        this.setState({name : event.target.value})
    }
    unlock = () => {
        this.props.passBack(this.props.num);
    }

    passAns = (passUp, letter) => {
        this.setState({[letter] : passUp})
    }
    passCorrect = passUp => {
        this.setState({correct : passUp})
    }

    render() {
        return(
            <div>
                {Number(this.props.num) + 1}. 
                <input type="text" onChange={this.updateQuestion} readOnly={this.state.locked}/>
                <CopiedButton onClick={this.unlock}>Edit</CopiedButton>
                <Answer letter="A" locked={this.state.locked} 
                    passAns={this.passAns}
                    passCorrect={this.passCorrect}
                    radio={this.state.correct=="A"}
                />
                <Answer letter="B" locked={this.state.locked} 
                    passAns={this.passAns}
                    passCorrect={this.passCorrect}
                    radio={this.state.correct=="B"}
                />
                <Answer letter="C" locked={this.state.locked} 
                    passAns={this.passAns}
                    passCorrect={this.passCorrect}
                    radio={this.state.correct=="C"}
                />
                <Answer letter="D" locked={this.state.locked} 
                    passAns={this.passAns}
                    passCorrect={this.passCorrect}
                    radio={this.state.correct=="D"}
                />
            </div>
        );
    }

}

export default Question;