import React, {Component} from 'react';
import styled from 'styled-components';


class Answer extends Component{
    constructor(props){
        super(props)
        this.state = {
            opt: "",
            correct: false,
            locked: this.props.locked
        }
    }
    updateAns = event => {
        this.setState({opt : event.target.value})
        this.props.passAns(event.target.value, this.props.letter)
    }
    correct = event => {
        this.setState({correct : event.target.value})
        this.props.passCorrect(this.props.letter)
    }
    componentWillReceiveProps(newProps) {
        this.setState({locked : newProps.locked})
    }
    render() {
        return(
            <div>
                <input type="radio" name={this.props.letter} value={true} onChange={this.correct} 
                    readOnly = {this.state.locked} /> {this.props.letter}
                <label>
                    <input type="text" onChange={this.updateAns} readOnly = {this.state.locked} />
                </label>
            </div>
        );
    }

}

export default Answer;