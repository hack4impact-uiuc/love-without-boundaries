import * as React from 'react';
import styled from 'styled-components';
import AdminPage from './AdminPage'
import Question from '../components/question'

class QuizPage extends React.Component{
    constructor(props){
        super(props)
        this.state = { question:'', createQuestion:false}
    }
    /* question = () => {
        this.setState({ createQuestion:true })
    }

    update = event => {
        this.setState({ question = event.target.value })
    } 
    {this.state.createQuestion && <Question name={this.state.question}/>}
                <form>
                    <label>
                        Add Question:
                        <input
                        type="text"
                        onChange={this.update}
                        />
                    </label>
                    <button onClick={this.question}>Create</button>
                </form>
    */
    finish = () => {window.location = AdminPage}
    render() {
        return (
            <div>
                
                <button onClick={this.finish}>Finish</button>
            </div>
        );
    }
}

export default QuizPage;