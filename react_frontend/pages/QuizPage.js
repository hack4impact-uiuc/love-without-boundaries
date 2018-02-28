import * as React from 'react';
import styled from 'styled-components';
import AdminPage from './AdminPage'
import Question from '../components/question'

type Props = {
    /**/ 
  }

class QuizPage extends React.Component<Props>{
    constructor(Props){
        super(Props)
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