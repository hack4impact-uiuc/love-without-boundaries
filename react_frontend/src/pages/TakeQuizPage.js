import React, { Component } from 'react';
import styled from 'styled-components';
import Question from '../components/question'
import Answer from '../components/answer'

class TakeQuizPage extends Component{
    constructor(props){
        super(props)
        this.state = {qNum: 0, qMap : []}
    }
    finish = () => {window.location = '/student'}
    render() {
        return (
            //return some sort of query rendered for lesson-specific quiz?
            <div>
            <h1>Quiz 1</h1>
            <button onClick={this.finish}>Finish</button>
            </div>
        );
    }
}

export default TakeQuizPage;