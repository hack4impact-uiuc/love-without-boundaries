import React, {Component} from 'react';
import styled from 'styled-components';
import Answer from '../components/answer'

class Quiz extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : "",
            //locked : false
        }
    }
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
            </div>
        );
    }

}

export default Quiz;