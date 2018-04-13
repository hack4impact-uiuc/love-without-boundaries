import React, { Component } from 'react';
import styled from 'styled-components';
import Answer from '../components/answer';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     name: '',
        //     // locked : false
        // };
        this.state = {isGoing: false};
    }
    render() {
        return (
            <div>
                {(this.props.quiz.questions.map((q, idx) => (
                    <div>
                        <h3 key={idx}> Question {idx + 1}: { q.questionName}  </h3>
                        {q.answers.map(a =>
                        // <h5 key={idx}> {a.answerName}</h5>
                        <div> 
                        {a.answerName} 
                        <input
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                        </div>
                    )}

                    </div>
                )))}
               
            </div>
        );
    }
}

export default Quiz;
