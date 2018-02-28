import * as React from 'react';
import styled from 'styled-components';
import QuizPage from './QuizPage'

type Props = {
    /*prop = type*/ 
  }

class AdminPage extends React.Component<Props>{
    constructor(Props){
        super(Props);
        this.state = {}
    }
    gotoQuiz = () => {window.location = QuizPage}
    render() {
        return (
            <div>
                Admin Page <br/>
                <button onClick = {this.gotoQuiz}>Create Quiz</button>
            </div>
        );
    }
}

export default AdminPage;