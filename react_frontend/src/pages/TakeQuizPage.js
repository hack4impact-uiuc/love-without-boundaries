import React, { Component } from 'react';
import styled from 'styled-components';
import Quiz from '../components/quiz';

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
            <Quiz/>
            <button onClick={this.finish}>Finish</button>
            </div>
        );
    }
}

export default TakeQuizPage;