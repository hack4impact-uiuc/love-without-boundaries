import React, {Component} from 'react';
import styled from 'styled-components';


class Answer extends Component{
    constructor(props){
        super(props);
        this.state = {
            opt: this.props.opt ? this.props.opt : '',
            correct: this.props.radio,
            locked: this.props.locked,
        }
    }
    updateAns = event => {
        this.setState({opt : event.target.value})
        this.props.passAns(event.target.value, this.props.index)
    }
    correct = event => {
        this.setState({correct : event.target.value})
        this.props.passCorrect(this.props.index)
    }
    componentWillReceiveProps(newProps) {
        this.setState({locked : newProps.locked, correct : newProps.radio})
    }
    render() {
        return(
            <div>
                <input type="radio" name={this.props.index} value={this.state.radio} onChange={this.correct} 
                    disabled={this.state.locked} checked={this.state.correct}/>
                <label>
                    <input type="text" value={this.state.opt} onChange={this.updateAns} readOnly = {this.state.locked} />
                </label>
            </div>
        );
    }

}

export default Answer;