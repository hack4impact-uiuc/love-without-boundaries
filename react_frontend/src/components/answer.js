import React, {Component} from 'react';
import styled from 'styled-components';


class Answer extends Component{
    constructor(props){
        super(props);
        // this.state.opt is the text value
        this.state = {
            opt: this.props.opt ? this.props.opt : '',
            correct: this.props.radio,
            locked: this.props.locked,
        };
    }
    updateAns = event => {
        this.setState({opt : event.target.value});
        this.props.passAns(event.target.value, this.props.index);
    }
    correct = event => {
        this.setState((nextState) => {correct : !nextState.correct});
        this.props.passCorrect(this.props.index);
    }
    componentWillReceiveProps(newProps) {
        if (newProps.radio !== this.state.correct){
            this.setState({
                correct: newProps.radio
            });
        }
        else if (newProps.locked !== this.state.locked){
            this.setState({
                locked: newProps.locked
            });
        }
    }
    render() {
        return(
            <div>
                <input type="radio" name={this.props.index} onChange={this.correct} 
                    disabled={this.state.locked} checked={this.state.correct}/>
                <label>
                    <input type="text" value={this.state.opt} onChange={this.updateAns} readOnly = {this.state.locked} />
                </label>
            </div>
        );
    }

}

export default Answer;