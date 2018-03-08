import * as React from 'react';
import styled from 'styled-components';
import Question from '../components/question'
/* dictionary of questions, each with a,b,c,d,name,etc.
 map and this.state to create new component and pass in

Object.keys(this.state.dict).map

1. Create question (add a new key, begin{this.state.questions[q]ay with question name)
2. Add options (add options to{this.state.questions[q]ay)
3. Check correct (add correct to{this.state.questions[q]ay)


 {this.state.questions.map(q => <ol><li>{q}</li></ol>)}
                <br />
                <form>
                    <input type="radio" value="A" 
                        onChange={this.radio} /> A. {this.state.opts[0]}<br/>
                    <input type="radio" value="B" 
                        onChange={this.radio} /> B. {this.state.opts[1]}<br/>
                    <input type="radio" value="C"
                        onChange={this.radio} /> C. {this.state.opts[2]}<br/>
                    <input type="radio" value="D" 
                        onChange={this.radio} /> D. {this.state.opts[3]}<br/>
                </form>
                <br />

 */
class QuizPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {questions: {}, count: 0, question: "", opt: ""}
        //'q#:' [name, A, B, C, D, correct]
        //this.state = {opts:[], opt:'', correct:'', questions:[], question:''}
    }
    finish = () => {window.location = '/admin'}
    updateQ = input => {
        this.setState({ question : input.target.value })
    } 
    addQuestion = () => {
        let questionsNew = this.state.questions
        questionsNew[this.state.count + 1] = [this.state.question]
        this.setState({
            count : this.state.count + 1,
            questions : questionsNew
        })
    }
    updateopt = input => {
        this.setState({ opt : input.target.value })
    } 
    option = () => {
        let questionsNew = this.state.questions
        questionsNew[this.state.count].push(this.state.opt)
        this.setState({ questions : questionsNew })
    }
    radio = correctAns => {
        let questionsNew = this.state.questions
        questionsNew[this.state.count].push(correctAns.target.value)
        this.setState({ questions : questionsNew })
    }
    render() {
        return (
            <div>
                Quiz Page
                <br />
                {
                    Object.keys(this.state.questions).map(q => (
                        <div>
                            {this.state.questions[q].length > 0 && this.state.questions[q][0]} 
                            <br/>
                            <form>
                                <input type="radio" value="A" 
                                    onChange={this.radio} /> A. {this.state.questions[q].length > 1 && 
                                    this.state.questions[q][1]}<br/>
                                <input type="radio" value="B" 
                                    onChange={this.radio} /> B. {this.state.questions[q].length > 2 && 
                                    this.state.questions[q][2]}<br/>
                                <input type="radio" value="C"
                                    onChange={this.radio} /> C. {this.state.questions[q].length > 3 && 
                                    this.state.questions[q][3]}<br/>
                                <input type="radio" value="D" 
                                    onChange={this.radio} /> D. {this.state.questions[q].length > 4 && 
                                    this.state.questions[q][4]}<br/>
                            </form>
                        </div>
                    ))
                }
                <label>
                    Add Question:
                    <input
                    type="text"
                    onChange={this.updateQ}
                    />
                </label>
                <button onClick={this.addQuestion}>Create</button>
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