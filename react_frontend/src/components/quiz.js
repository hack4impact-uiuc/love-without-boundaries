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
                Question 1: He ..... there when he was a child <br/>
                <input type="radio" name="q1" /> has lived <br/>
                <input type="radio" name="q1" /> lived <br/>
                <input type="radio" name="q1" /> does live <br/>
                <input type="radio" name="q1" /> lives <br/>

                <br/>
                Question 2: They ......... a few minutes ago <br/>
                <input type="radio" name="q2" /> have left <br/>
                <input type="radio" name="q2" /> left <br/>
                <input type="radio" name="q2" /> did left <br/>
                <input type="radio" name="q2" /> does left <br/>
                <br/>
            </div>
        );
    }

}

export default Quiz;