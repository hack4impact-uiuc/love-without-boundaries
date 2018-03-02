import * as React from 'react';
import styled from 'styled-components';
import Question from '../components/question'
// Display options
// Determine correct
// Export to question component
class QuizPage extends React.Component{
    constructor(props){
        super(props)
    this.state = {opts:[], opt:'', correct:'', questions:[], question:'', createQuestion:false}
    }
    finish = () => {window.location = '/admin'}
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
    radio = correct => {
        this.setState({ correct : correct.target.value })
    }
    render() {
        return (
            <div>
                Quiz Page
                <br />
                {this.state.questions.map(q => <ol><li>{q}</li></ol>)}
                <br />
                <form>
                    <input type="checkbox" value="A" checked={this.state.correct == "A"} 
                        onChange={this.radio} /> A. {this.state.opts[0]}<br/>
                    <input type="checkbox" value="B" checked={this.state.correct == "B"} 
                        onChange={this.radio} /> B. {this.state.opts[1]}<br/>
                    <input type="checkbox" value="C" checked={this.state.correct == "C"}
                        onChange={this.radio} /> C. {this.state.opts[2]}<br/>
                    <input type="checkbox" value="D" checked={this.state.correct == "D"} 
                        onChange={this.radio} /> D. {this.state.opts[3]}<br/>
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