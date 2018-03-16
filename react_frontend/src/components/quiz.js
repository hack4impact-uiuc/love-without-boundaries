import React, {Component} from 'react';
import styled from 'styled-components';
import Question from '../components/question'
import Answer from '../components/answer'

class Quiz extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : "",
            //locked : false
        }
    }

    /*

            <div>
                <input type="text" onChange={this.updateQuiz} readOnly={this.state.locked} />?
                <Question />
                <button onClick = {this.edit}>Edit</button>
                <button onClick = {this.create}>Create</button>
            </div>

    */
    render() {
        return(
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
            <button onClick={this.finish}>Finish</button>
            </div>
        );
    }

}

export default Quiz;