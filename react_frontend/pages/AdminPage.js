import * as React from 'react';
import styled from 'styled-components';

class AdminPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    gotoQuiz = () => {window.location = '/quiz'}
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