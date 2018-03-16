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
            //TODO: replace with some sort of query rendered for lesson-specific quiz?
            <div>
            <h1>Quiz 1</h1>
                <div>
                Question 1: ???
                <Answer letter="A" />
                <Answer letter="B" />
                <Answer letter="C" />
                <Answer letter="D" />
                <br/>
                Question 2: ???
                <Answer letter="A" />
                <Answer letter="B" />
                <Answer letter="C" />
                <Answer letter="D" />
                <br/>
                Question 3: ???
                <Answer letter="A" />
                <Answer letter="B" />
                <Answer letter="C" />
                <Answer letter="D" />
                <br/>
                </div>
            <button onClick={this.finish}>Finish</button>
            </div>
        );
    }
}

export default TakeQuizPage;