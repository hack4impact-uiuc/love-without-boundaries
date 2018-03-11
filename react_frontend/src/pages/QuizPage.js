import React, { Component } from 'react';
import styled from 'styled-components';
import Question from '../components/question'

class QuizPage extends Component{
    constructor(props){
        super(props)
        this.state = {qNum: 0, qMap : []}
    }
    finish = () => {window.location = '/admin'}
    addQuestion = () => {
        this.setState({qNum : this.state.qNum + 1, qMap : [...this.state.qMap, this.state.qNum + 1]})
    }
    render() {
        return (
            <div>
                Quiz Page
                <br />
                {this.state.qMap.map( () => <div><Question /><br /></div> )}
                <button onClick={this.addQuestion}>Add Question</button>
                <br />
                <button onClick={this.finish}>Finish</button>
            </div>
        );
    }
}

export default QuizPage;