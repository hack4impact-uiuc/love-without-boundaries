import * as React from 'react';
import styled from 'styled-components';
import Question from '../components/question'
// Display options
// Determine correct
// Export to question component
class QuizPage extends React.Component{
    constructor(props){
        super(props)
    this.state = {opts:[], opt:'', questions:[], question:'', createQuestion:false}
    }
    question = () => {
        //var questionCopy = questions.slice();
        //questionCopy.push(this.state.question)
        //questions.push(question)
        this.setState({ createQuestion : true, questions : [...this.state.questions, this.state.question] })
    }
    update = input => {
        this.setState({ question : input.target.value })
    } 
    updateopt = input => {
        this.setState({ opt : input.target.value })
    } 
    option = () => {
        this.setState({ opts : [...this.state.opts, this.state.opt] })
    }
    finish = () => {window.location = '/admin'}
    render() {
        return (
            <div>
                Quiz Page <br />
                {this.state.questions.map(q => <li>{q}</li>)}
                <br />
                <form>
                    <input type="radio" name="choice" value="optionA"> {opts[0]} </input>
                    <input type="radio" name="choice" value="optionB"> {opts[1]} </input>
                    <input type="radio" name="choice" value="optionC"> {opts[2]} </input>
                    <input type="radio" name="choice" value="optionD"> {opts[3]} </input>
                </form>
                <br />
                <label>
                    Add Question:
                    <input
                    type="text"
                    onChange={this.update}
                    />
                </label>
                <button onClick={this.question}>Create</button>
                <br />
                <label>
                    Add Options:
                    <input
                    type="text"
                    onChange={this.updateopt}
                    />
                </label>
                <button onClick={this.option}>Add</button>
                <br />
                <button onClick={this.finish}>Finish</button>
            </div>
        );
    }
}

export default QuizPage;